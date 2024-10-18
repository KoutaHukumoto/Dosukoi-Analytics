package Dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.account;

public class UserDao extends BaseDao{
	
	/*
	 * ユーザーIDとHash値で検索し検索結果あるか否かをチェックする
	 */
	
	public boolean findByIdAndPassword(account account) {
		//検索結果あり	（true）or なし(false)
		boolean isLogin = false;
		
		try {
			//DB接続
			this.connect();
			
			String sql = "SELECT id, name, hash "
								+ "FROM user "
								+ "WHERE id = ? "
								+ "AND hash = ? ";
			
			PreparedStatement ps = con.prepareStatement(sql);
			
			//バインド変数に検索条件を設定する
			ps.setString(1, account.getAccountId());
			ps.setString(2,account.getHash());
			
			//検索処理を実行し検索結果を取得する
			ResultSet rs = ps.executeQuery();
			
			if(rs.next()) {
				//検索結果あり
				String name = rs.getString("name");
				account.setName(name);
				isLogin = true;
			}
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				//DB切断
				this.disConnect();
			}catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return isLogin;
	}
	
}

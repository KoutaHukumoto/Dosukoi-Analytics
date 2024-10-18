package model;

import Dao.UserDao;

/*
 * ログイン機能
 */
public class loginLogic {
	
	/*
	 * ログイン認証
	 */
	
	public boolean execute(account account) {
		UserDao userDao = new UserDao();
		
		boolean isLogin = userDao.findByIdAndPassword(account);
		
		return isLogin;
	}
}

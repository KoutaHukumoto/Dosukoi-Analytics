package model;

import java.io.Serializable;

/*
 *JavaBeans 
 * userテーブルのデータを保持するクラス
*/

public class account implements Serializable{
	private int accountId;
	
	private String password;

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
package model;

import java.io.Serializable;

/*
 *JavaBeans 
 * userテーブルのデータを保持するクラス
*/

public class item implements Serializable{
	private int itemId;
	
	private String itemName;
	
	private String description;
	
	private String effect;
	
	private String effectId;

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEffect() {
		return effect;
	}

	public void setEffect(String effect) {
		this.effect = effect;
	}

	public String getEffectId() {
		return effectId;
	}

	public void setEffectId(String effectId) {
		this.effectId = effectId;
	}
}
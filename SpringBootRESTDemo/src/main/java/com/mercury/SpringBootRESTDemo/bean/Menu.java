package com.mercury.SpringBootRESTDemo.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "PROJECT_MENU")
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PROJECT_MENU_SEQ_GEN")
	@SequenceGenerator(name = "PROJECT_MENU_SEQ_GEN", sequenceName = "PROJECT_MENU_SEQ", allocationSize = 1)
	private int id;
	@Column
	private String name;
	@Column
	private int price;
	@Column
	private String type;
	@Column
	private String img;
	@Column
	private String description;

	public Menu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Menu(int id, String name, int price, String type, String img, String description) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.type = type;
		this.img = img;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}

package com.mercury.SpringBootRESTDemo.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "PROJECT_ORDER_PROJECT_MENU")
public class Order_Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PROJECT_ORDER_PROJECT_MENU_SEQ_GEN")
	@SequenceGenerator(name = "PROJECT_ORDER_PROJECT_MENU_SEQ_GEN", sequenceName = "PROJECT_ORDER_PROJECT_MENU_SEQ", allocationSize = 1)
	private int id;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "menu_id")
	private Menu menu;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "order_id")
	@JsonIgnoreProperties("order_menu")
	private Order order;
	
	@Column
	private String status;
	
	public Order_Menu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order_Menu(Menu menu, Order order, String status) {
		super();
		this.menu = menu;
		this.order = order;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	

	
}

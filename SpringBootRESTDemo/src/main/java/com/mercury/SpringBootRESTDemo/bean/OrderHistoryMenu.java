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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "PROJECT_ORDER_HISTORY_MENU")
public class OrderHistoryMenu {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PROJECT_ORDER_HISTORY_MENU_SEQ_GEN")
	@SequenceGenerator(name = "PROJECT_ORDER_HISTORY_MENU_SEQ_GEN", sequenceName = "PROJECT_ORDER_HISTORY_MENU_SEQ", allocationSize = 1)
	private int id;
	@Column
	private String name;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "order_id")
	@JsonIgnoreProperties("order_menu")
	private OrderHistory order;

	public OrderHistoryMenu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderHistoryMenu(String name, OrderHistory order) {
		super();
		this.name = name;
		this.order = order;
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

	public OrderHistory getOrder() {
		return order;
	}

	public void setOrder(OrderHistory order) {
		this.order = order;
	}

	
}

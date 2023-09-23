package com.mercury.SpringBootRESTDemo.bean;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "PROJECT_ORDER_HISTORY")
public class OrderHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PROJECT_ORDER_HISTORY_SEQ_GEN")
	@SequenceGenerator(name = "PROJECT_ORDER_HISTORY_SEQ_GEN", sequenceName = "PROJECT_ORDER_HISTORY_SEQ", allocationSize = 1)
	private int id;
	@Column
	private int total_price;
	@Column
	private int total_order;
	@Column
	private LocalDateTime order_date;
	@Column
	private int order_id;
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<OrderHistoryMenu> order_menu;

	public OrderHistory() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderHistory( int total_price, int total_order, LocalDateTime order_date, int order_id,
			List<OrderHistoryMenu> order_menu) {
		super();
		this.total_price = total_price;
		this.total_order = total_order;
		this.order_date = order_date;
		this.order_id = order_id;
		this.order_menu = order_menu;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getTotal_price() {
		return total_price;
	}

	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}

	public int getTotal_order() {
		return total_order;
	}

	public void setTotal_order(int total_order) {
		this.total_order = total_order;
	}

	public LocalDateTime getOrder_date() {
		return order_date;
	}

	public void setOrder_date(LocalDateTime order_date) {
		this.order_date = order_date;
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public List<OrderHistoryMenu> getOrder_menu() {
		return order_menu;
	}

	public void setOrder_menu(List<OrderHistoryMenu> order_menu) {
		this.order_menu = order_menu;
	}

	
}

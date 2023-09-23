package com.mercury.SpringBootRESTDemo.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "PROJECT_ORDER")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PROJECT_ORDER_SEQ_GEN")
	@SequenceGenerator(name = "PROJECT_ORDER_SEQ_GEN", sequenceName = "PROJECT_ORDER_SEQ", allocationSize = 1)
	private int id;

	@Column
	private int total_order;

	@Column
	private int total_price;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "table_id")
	@JsonIgnoreProperties("order")
	Tablee tablee;

	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Order_Menu> order_menu;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "cus_id")
	private Customer customer;

	@Column
	private String status;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(int total_order, int total_price, Tablee tablee, List<Order_Menu> order_menu, Customer customer,
			String status, User user) {
		super();
		this.total_order = total_order;
		this.total_price = total_price;
		this.tablee = tablee;
		this.order_menu = order_menu;
		this.customer = customer;
		this.status = status;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getTotal_order() {
		return total_order;
	}

	public void setTotal_order(int total_order) {
		this.total_order = total_order;
	}

	public int getTotal_price() {
		return total_price;
	}

	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}

	public Tablee getTablee() {
		return tablee;
	}

	public void setTablee(Tablee tablee) {
		this.tablee = tablee;
	}

	public List<Order_Menu> getOrder_menu() {
		return order_menu;
	}

	public void setOrder_menu(List<Order_Menu> order_menu) {
		this.order_menu = order_menu;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	
}

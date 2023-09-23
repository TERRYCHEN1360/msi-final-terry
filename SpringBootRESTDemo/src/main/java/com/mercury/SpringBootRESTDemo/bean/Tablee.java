package com.mercury.SpringBootRESTDemo.bean;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "PROJECT_TABLE")
public class Tablee {
	@Id
	private int id;
	@OneToOne(mappedBy = "tablee" , fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Order order;
	
	public Tablee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Tablee(int id, Order order) {
		super();
		this.id = id;
		this.order = order;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
	
	
}

package com.mercury.SpringBootRESTDemo.bean;

import com.mercury.SpringBootRESTDemo.http.Response;

public class OrderResponseWapper {

	private Response response;
	private Order order;

	public OrderResponseWapper() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderResponseWapper(Response response, Order order) {
		super();
		this.response = response;
		this.order = order;
	}

	public Response getResponse() {
		return response;
	}

	public void setResponse(Response response) {
		this.response = response;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

}

package com.mercury.SpringBootRESTDemo.bean;

import java.util.List;

import com.mercury.SpringBootRESTDemo.http.Response;

public class ListOrderResponseWapper {
	private List<Order> order;
	private Response response;
	public ListOrderResponseWapper() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ListOrderResponseWapper(List<Order> order, Response response) {
		super();
		this.order = order;
		this.response = response;
	}
	public List<Order> getOrder() {
		return order;
	}
	public void setOrder(List<Order> order) {
		this.order = order;
	}
	public Response getResponse() {
		return response;
	}
	public void setResponse(Response response) {
		this.response = response;
	}
	
}

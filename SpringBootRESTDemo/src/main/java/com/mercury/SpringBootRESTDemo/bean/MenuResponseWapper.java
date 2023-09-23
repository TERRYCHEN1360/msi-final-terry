package com.mercury.SpringBootRESTDemo.bean;

import java.util.List;

import com.mercury.SpringBootRESTDemo.http.Response;

public class MenuResponseWapper {

	public List<Menu> menu;
	public Response response;
	public MenuResponseWapper() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MenuResponseWapper(List<Menu> menu, Response response) {
		super();
		this.menu = menu;
		this.response = response;
	}
	public List<Menu> getMenu() {
		return menu;
	}
	public void setMenu(List<Menu> menu) {
		this.menu = menu;
	}
	public Response getResponse() {
		return response;
	}
	public void setResponse(Response response) {
		this.response = response;
	}
	
	
	
}

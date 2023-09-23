package com.mercury.SpringBootRESTDemo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.SpringBootRESTDemo.bean.Order_Menu;
import com.mercury.SpringBootRESTDemo.http.Response;
import com.mercury.SpringBootRESTDemo.service.Order_MenuService;

@RestController
public class Order_MenuController {
	
	@Autowired
	Order_MenuService order_MenuService;
	
	
	@PostMapping(value = "/postorder")
	public void postOrder(@RequestBody Order_Menu order_menu) {
		order_MenuService.saveorder(order_menu);
	}
	
	@PutMapping(value = "/setorderstatus")
	public Response putStatus(@RequestBody Order_Menu order_menu) {
		return order_MenuService.setStatus(order_menu);
	}
	
	@DeleteMapping(value = "/deleteordermenu/{id}")
	public Response delOrderMenu(@PathVariable int id) {
		return order_MenuService.deleteordermenu(id);
	}
	
}

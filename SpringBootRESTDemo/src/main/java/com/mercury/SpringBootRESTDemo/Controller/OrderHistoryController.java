package com.mercury.SpringBootRESTDemo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.SpringBootRESTDemo.bean.OrderHistory;
import com.mercury.SpringBootRESTDemo.service.OrderHistoryService;

@RestController
public class OrderHistoryController {
	
	
	@Autowired
	OrderHistoryService orderHistoryService;
	
	@GetMapping(value="/orderhistory")
	public List<OrderHistory> gethistory(){
		return orderHistoryService.gethistory();
	}
}

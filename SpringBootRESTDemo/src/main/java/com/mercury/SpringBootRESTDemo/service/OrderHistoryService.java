package com.mercury.SpringBootRESTDemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.OrderHistory;
import com.mercury.SpringBootRESTDemo.dao.OrderHistoryDao;

@Service
public class OrderHistoryService {
	
	
	@Autowired
	OrderHistoryDao orderHistoryDao;
	
	public void saveorder(OrderHistory orderHistory) {
		orderHistoryDao.save(orderHistory);
	}
	
	public List<OrderHistory> gethistory(){
		return orderHistoryDao.findAll();
	}
	
}

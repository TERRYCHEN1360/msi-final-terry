package com.mercury.SpringBootRESTDemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.dao.OrderHistoryMenuDao;

@Service
public class OrderHistoryMenuService {
	
	@Autowired
	OrderHistoryMenuDao orderHistoryMenuDao;
}

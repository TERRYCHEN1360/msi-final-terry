package com.mercury.SpringBootRESTDemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.Customer;
import com.mercury.SpringBootRESTDemo.dao.CustomerDao;

@Service
public class CustomerService {

	@Autowired
	CustomerDao customerDao;
	
	public void newcustomer(Customer c) {
		customerDao.save(c);
	}
	
	public Customer findByphone(Double phone) {
		return customerDao.findByphone(phone);
	}
}

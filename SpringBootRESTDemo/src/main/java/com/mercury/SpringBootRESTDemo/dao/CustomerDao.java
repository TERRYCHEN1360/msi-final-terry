package com.mercury.SpringBootRESTDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.SpringBootRESTDemo.bean.Customer;

public interface CustomerDao extends JpaRepository<Customer, Integer> {
	Customer findByphone(Double p);
	
}

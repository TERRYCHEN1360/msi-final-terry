package com.mercury.SpringBootRESTDemo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.SpringBootRESTDemo.bean.Customer;
import com.mercury.SpringBootRESTDemo.service.CustomerService;

@RestController
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	
	@PostMapping(value= "/addcustomer")
	public void PostCustomer(@RequestBody Customer c) {
		 customerService.newcustomer(c);
	}
	
	@GetMapping(value= "/findcustomer/{phone}")
	public Customer getCustomer(@PathVariable Double phone) {
		System.out.println(phone);
		return customerService.findByphone(phone);
	}
}

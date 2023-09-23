
package com.mercury.SpringBootRESTDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mercury.SpringBootRESTDemo.service.OrderService;
import com.mercury.SpringBootRESTDemo.service.StockService;



@SpringBootApplication
public class SpringBootRestDemoApplication{

	
	@Autowired
	OrderService orderService;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootRestDemoApplication.class, args);
	}

	

}

package com.mercury.SpringBootRESTDemo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.SpringBootRESTDemo.bean.Tablee;
import com.mercury.SpringBootRESTDemo.service.TableeService;

@RestController
public class TableeController {

	@Autowired
	TableeService tableeService;
	
	
	
	@GetMapping(value="/gettableinfo/{id}")
	public Tablee getTableeinfo(@PathVariable int id) {
		return tableeService.findTableinfo(id);
	}
}

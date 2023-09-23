package com.mercury.SpringBootRESTDemo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.SpringBootRESTDemo.bean.EmployeeWorkingTime;
import com.mercury.SpringBootRESTDemo.bean.LogTimeResponseWapper;
import com.mercury.SpringBootRESTDemo.bean.User;
import com.mercury.SpringBootRESTDemo.service.EmployeeWorkingTimeService;

@RestController
public class EmployeeWorkingTimeController {
	
	@Autowired
	EmployeeWorkingTimeService employeeWorkingTimeService;
	
	@PostMapping(value="/logtime")
	public void postlogtime(@RequestBody User user) {
		 employeeWorkingTimeService.logtime(user);
	}
	
	@PutMapping(value="/adjusttime")
	public LogTimeResponseWapper putlogtime(@RequestBody EmployeeWorkingTime employeeWorkingTime) {
		return employeeWorkingTimeService.changelogtime(employeeWorkingTime);
	}
	
	@PostMapping(value="/outtime")
	public void postouttime(@RequestBody User user) {
		 employeeWorkingTimeService.outTime(user);
	}
}

package com.mercury.SpringBootRESTDemo.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.SpringBootRESTDemo.bean.User;
import com.mercury.SpringBootRESTDemo.http.Response;
import com.mercury.SpringBootRESTDemo.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping(value = "/register")
	public Response addUser(@Valid @RequestBody User user) {
		return userService.register(user);
	}
	
	@GetMapping(value = "/getuser")
	public List<User> getusers(){
		return userService.getUser();
	}
}

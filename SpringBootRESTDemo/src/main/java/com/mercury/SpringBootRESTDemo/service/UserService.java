package com.mercury.SpringBootRESTDemo.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.User;
import com.mercury.SpringBootRESTDemo.bean.UserProfile;
import com.mercury.SpringBootRESTDemo.dao.UserDao;
import com.mercury.SpringBootRESTDemo.dao.UserProfileDao;
import com.mercury.SpringBootRESTDemo.http.Response;

@Service
@Transactional
public class UserService {
	
	private final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	UserProfileDao userProfileDao;

	@Autowired
	PasswordEncoder passwordEncoder;

	public Response register(User user) {
		try {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		List<UserProfile> profile = new ArrayList<>();
		user.getProfile().forEach( (e) -> {
			profile.add(userProfileDao.findById(e.getId()).get());
		});
		user.setProfile(profile);
		user.getUserDetail().setUser(user);
		userDao.save(user);
		return new Response(true);
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e.getMessage());
			return new Response(false, 400, e.getMessage());
			
		}
	}
	
	
	public List<User> getUser(){
		return userDao.findAll();
	}

}

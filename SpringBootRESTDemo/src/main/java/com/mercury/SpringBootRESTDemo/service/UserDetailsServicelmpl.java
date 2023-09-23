package com.mercury.SpringBootRESTDemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.dao.UserDao;

@Service
public class UserDetailsServicelmpl implements UserDetailsService{
	 
	
	@Autowired
	UserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return userDao.findByUsername(username);
	}
	
}

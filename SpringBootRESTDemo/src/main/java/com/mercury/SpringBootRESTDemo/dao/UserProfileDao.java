package com.mercury.SpringBootRESTDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.SpringBootRESTDemo.bean.UserProfile;

public interface UserProfileDao extends JpaRepository<UserProfile, Integer> {

}

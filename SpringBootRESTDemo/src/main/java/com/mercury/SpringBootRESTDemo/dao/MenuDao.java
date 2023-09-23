package com.mercury.SpringBootRESTDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.SpringBootRESTDemo.bean.Menu;

public interface MenuDao extends JpaRepository<Menu, Integer> {

}

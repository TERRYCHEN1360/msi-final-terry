package com.mercury.SpringBootRESTDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.SpringBootRESTDemo.bean.OrderHistoryMenu;

public interface OrderHistoryMenuDao extends JpaRepository<OrderHistoryMenu, Integer> {

}

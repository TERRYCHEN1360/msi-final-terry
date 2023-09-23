package com.mercury.SpringBootRESTDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.SpringBootRESTDemo.bean.OrderHistory;

public interface OrderHistoryDao extends JpaRepository<OrderHistory, Integer> {

}

package com.mercury.SpringBootRESTDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.mercury.SpringBootRESTDemo.bean.Order_Menu;

public interface Order_MenuDao extends JpaRepository<Order_Menu, Integer> {

	
	@Transactional
	@Modifying
	@Query("delete from Order_Menu om where om.order.id = :id")
	void deleteOrderMenuByOrderId(@Param("id") int id);
}

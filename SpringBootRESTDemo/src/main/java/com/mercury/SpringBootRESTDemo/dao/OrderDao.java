package com.mercury.SpringBootRESTDemo.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.mercury.SpringBootRESTDemo.bean.Order;

public interface OrderDao extends JpaRepository<Order, Integer> {
	Order findByid(int it);
	
	@Transactional
	@Modifying
	@Query("delete from Order o where o.id = :id")
	void deleteOrderByOrderId(@Param("id") int id);
}

package com.mercury.SpringBootRESTDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.SpringBootRESTDemo.bean.Tablee;

public interface TableeDao extends JpaRepository<Tablee, Integer> {
	Tablee findByid(int id);
}

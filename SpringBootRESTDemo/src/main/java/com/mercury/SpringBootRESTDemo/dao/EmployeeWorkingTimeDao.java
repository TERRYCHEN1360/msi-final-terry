package com.mercury.SpringBootRESTDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mercury.SpringBootRESTDemo.bean.EmployeeWorkingTime;

public interface EmployeeWorkingTimeDao extends JpaRepository<EmployeeWorkingTime, Integer> {

}

package com.mercury.SpringBootRESTDemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.Tablee;
import com.mercury.SpringBootRESTDemo.dao.TableeDao;

@Service
public class TableeService {
	
	@Autowired
	TableeDao tableeDao;
	
	public Tablee findTableinfo(int id) {
		return tableeDao.findByid(id);
	}

}

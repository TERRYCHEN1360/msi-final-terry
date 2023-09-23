package com.mercury.SpringBootRESTDemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.Menu;
import com.mercury.SpringBootRESTDemo.bean.MenuResponseWapper;
import com.mercury.SpringBootRESTDemo.dao.MenuDao;
import com.mercury.SpringBootRESTDemo.http.Response;

@Service
public class MenuService {
	
	@Autowired
	MenuDao menuDao;
	
	public MenuResponseWapper newfood(Menu menu) {
		try {
		menuDao.save(menu);
		return (new MenuResponseWapper(menuDao.findAll(), new Response(true)));
		}catch(Exception e) {
			return (new MenuResponseWapper(menuDao.findAll(), new Response(false)));
		}
	}
	
	
	public MenuResponseWapper delMenu(int i) {
		try {
			System.out.println(i);
			menuDao.deleteById(i);
			return (new MenuResponseWapper(menuDao.findAll(), new Response(true)));
		}catch (Exception e) {
			return (new MenuResponseWapper(menuDao.findAll(), new Response(false)));
		}
	}
	
	public List<Menu> findAllMenu(){
		return menuDao.findAll();
	}
	
	public MenuResponseWapper editMenu(List<Menu> menu) {
		try {
			menu.forEach((e)->{
				menuDao.save(e);
			});
			
			return (new MenuResponseWapper(menuDao.findAll(), new Response(true)));
		}catch (Exception e) {
			return (new MenuResponseWapper(menuDao.findAll(), new Response(false)));
		}
	}
}

package com.mercury.SpringBootRESTDemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.Order;
import com.mercury.SpringBootRESTDemo.bean.Order_Menu;
import com.mercury.SpringBootRESTDemo.dao.OrderDao;
import com.mercury.SpringBootRESTDemo.dao.Order_MenuDao;
import com.mercury.SpringBootRESTDemo.http.Response;

@Service
public class Order_MenuService {
	@Autowired
	Order_MenuDao order_MenuDao;
	
	@Autowired
	OrderDao orderDao;
	
	@Autowired
	private SimpMessageSendingOperations messagingTemplate;

	public void saveorder(Order_Menu order_Menu) {
		order_MenuDao.save(order_Menu);
	}

	public Response setStatus(Order_Menu order_menu) {

		try {
			Order_Menu o = order_MenuDao.findById(order_menu.getId()).get();
			o.setStatus(order_menu.getStatus());
			order_MenuDao.save(o);
			messagingTemplate.convertAndSend("/topic/orders", orderDao.findAll());
			return new Response(true);
		} catch (Exception e) {
			return new Response(false);
		}
	}

	public Response deleteordermenu(int i) {
		try {
			order_MenuDao.deleteById(i);
			messagingTemplate.convertAndSend("/topic/orders", orderDao.findAll());
			return new Response(true);
		} catch (Exception e) {
			return new Response(false);
		}
	}
}

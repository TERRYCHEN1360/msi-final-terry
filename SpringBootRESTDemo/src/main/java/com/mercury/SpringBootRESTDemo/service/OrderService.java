package com.mercury.SpringBootRESTDemo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.ListOrderResponseWapper;
import com.mercury.SpringBootRESTDemo.bean.Menu;
import com.mercury.SpringBootRESTDemo.bean.Order;
import com.mercury.SpringBootRESTDemo.bean.OrderResponseWapper;
import com.mercury.SpringBootRESTDemo.bean.Order_Menu;
import com.mercury.SpringBootRESTDemo.dao.MenuDao;
import com.mercury.SpringBootRESTDemo.dao.OrderDao;
import com.mercury.SpringBootRESTDemo.dao.Order_MenuDao;
import com.mercury.SpringBootRESTDemo.dao.UserDao;
import com.mercury.SpringBootRESTDemo.http.Response;

@Service
@Transactional
public class OrderService {
	@Autowired
	OrderDao orderDao;
	@Autowired
	MenuDao menuDao;
	@Autowired
	Order_MenuDao order_menuDao;
	@Autowired
	UserDao userDao;

	@Autowired
	private SimpMessageSendingOperations messagingTemplate;

	public List<Order> allOrder() {
		messagingTemplate.convertAndSend("/topic/orders", orderDao.findAll());
		return orderDao.findAll();
	}

	public Order findorderinfo(int id) {
		messagingTemplate.convertAndSend("/topic/orders", orderDao.findAll());
		return orderDao.findByid(id);
	}

	public ListOrderResponseWapper allOrderObj() {
		messagingTemplate.convertAndSend("/topic/orders", orderDao.findAll());
		return (new ListOrderResponseWapper(orderDao.findAll(), new Response(true)));
	}

	public OrderResponseWapper placeOrder(Order order) {
		try {

			List<Order_Menu> order_menu = order.getOrder_menu();
			order_menu.forEach((o) -> {
				Menu menu = (Menu) menuDao.findById(o.getMenu().getId()).get();
				o.setMenu(menu);
				o.setOrder(order);
			});
			order.setUser(userDao.findById(order.getUser().getId()).get());
			orderDao.save(order);
			messagingTemplate.convertAndSend("/topic/orders", orderDao.findAll());
			return (new OrderResponseWapper(new Response(true), orderDao.findByid(order.getId())));
		} catch (Exception e) {
			return (new OrderResponseWapper(new Response(false), orderDao.findByid(order.getId())));
		}
	}

	public OrderResponseWapper editOrder(Order order) {
		try {
			Order o = (Order) orderDao.findById(order.getId()).get();
			o.setTotal_order(order.getTotal_order());
			o.setTotal_price(order.getTotal_price());
			List<Order_Menu> foodToRemove = o.getOrder_menu();
			List<Order_Menu> order_menu = order.getOrder_menu();

			order_menu.forEach((x) -> {
				Menu menu = (Menu) menuDao.findById(x.getMenu().getId()).get();
				x.setMenu(menu);
				x.setOrder(o);
			});

			int initialSize = Math.min(foodToRemove.size(), order_menu.size());
			for (int i = 0; i < initialSize; i++) {
				order_menu.get(i).setStatus(foodToRemove.get(i).getStatus());
			}

			if (order_menu.size() > 0) {
				foodToRemove = foodToRemove.stream().filter((x) -> {
					return !order_menu.contains(x);
				}).collect(Collectors.toList());
			}

			o.setOrder_menu(order_menu);
			orderDao.save(o);

			deleteOrderProducts(foodToRemove);
			messagingTemplate.convertAndSend("/topic/orders", orderDao.findAll());
			return (new OrderResponseWapper(new Response(true), orderDao.findByid(order.getId())));
		} catch (Exception e) {
			System.out.println(e);
			return (new OrderResponseWapper(new Response(false), orderDao.findByid(order.getId())));
		}
	}

	public void deleteOrderProducts(List<Order_Menu> order_menu) {
		order_menuDao.deleteAll(order_menu);
	}

	public Response setStatus(Order order) {
		System.out.println("in");
		try {
			Order o = orderDao.findById(order.getId()).get();
			o.setStatus(order.getStatus());
			orderDao.save(o);
			messagingTemplate.convertAndSend("/topic/orders", orderDao.findAll());
			return new Response(true);
		} catch (Exception e) {
			return new Response(false);
		}
	}

	

}

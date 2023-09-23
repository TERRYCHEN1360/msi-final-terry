package com.mercury.SpringBootRESTDemo.Controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.SpringBootRESTDemo.bean.ListOrderResponseWapper;
import com.mercury.SpringBootRESTDemo.bean.Order;
import com.mercury.SpringBootRESTDemo.bean.OrderHistory;
import com.mercury.SpringBootRESTDemo.bean.OrderHistoryMenu;
import com.mercury.SpringBootRESTDemo.bean.OrderResponseWapper;
import com.mercury.SpringBootRESTDemo.dao.OrderDao;
import com.mercury.SpringBootRESTDemo.dao.Order_MenuDao;
import com.mercury.SpringBootRESTDemo.http.Response;
import com.mercury.SpringBootRESTDemo.service.MailClient;
import com.mercury.SpringBootRESTDemo.service.OrderHistoryService;
import com.mercury.SpringBootRESTDemo.service.OrderService;

@RestController
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@Autowired
	OrderDao orderDao;
	@Autowired
	Order_MenuDao omd;
	
	@Autowired
	MailClient mailClient;
	
	@Autowired
	private SimpMessageSendingOperations messagingTemplate;
	
	@Autowired
	OrderHistoryService orderHistoryService;
		
	@GetMapping(value="/getorder/{id}")
	public Order getOrderinfo(@PathVariable int id) {
		return orderService.findorderinfo(id);
	}
	
	@GetMapping(value="/allorder")
	public List<Order> getAllOrder(){
		return orderService.allOrder();
	}
	
	@PostMapping(value= "/placeorder")
	public OrderResponseWapper postOrder(@RequestBody Order order) {
		 return orderService.placeOrder(order);
	}
	
	@PutMapping("/updateorder")
	public OrderResponseWapper putOrders(@RequestBody Order order) {
		return orderService.editOrder(order);
	}
	
	@DeleteMapping("/deleteorder/{id}")
	@Transactional
	public ListOrderResponseWapper deleteOrder(@PathVariable int id) {
		Order o = orderDao.findById(id).get();
		mailClient.prepareAndSend(o);
		List<OrderHistoryMenu> lohm = new ArrayList<>();
		OrderHistory oh = new OrderHistory(o.getTotal_price(),o.getTotal_order(),LocalDateTime.now(),id,lohm);	
		o.getOrder_menu().forEach( (e) ->{
			lohm.add(new OrderHistoryMenu( e.getMenu().getName(), oh));
		});
		
		orderHistoryService.saveorder(oh);
		try {
			omd.deleteOrderMenuByOrderId(id);
			orderDao.deleteOrderByOrderId(id);
//			messagingTemplate.convertAndSend("/topic/orders", orderDao.findAll());
			return (new ListOrderResponseWapper(orderDao.findAll(), new Response(true)));
		} catch (Exception e) {
			return (new ListOrderResponseWapper(orderDao.findAll(), new Response(false)));
		}
		
	}
	
	@PutMapping("/setstatus")
	public Response putStatus(@RequestBody Order order) {
		return orderService.setStatus(order);
	}
	
	@GetMapping("/allorderobj")
	public ListOrderResponseWapper allOrderObj() {
		return orderService.allOrderObj();
	}
	
	@SubscribeMapping("/topic/orders")
	public String getOrders() {
		return "You are subscribed to orders topic.";
	}
//
//	@MessageMapping("/hello")
//	@SendTo("/topic/chat")
//	public String hello(String msg) {
//		System.out.println(msg);
//		return msg + " is handled by server.";
//	}
	
}

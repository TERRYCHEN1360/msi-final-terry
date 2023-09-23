package com.mercury.SpringBootRESTDemo.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.mercury.SpringBootRESTDemo.bean.Order;
import com.mercury.SpringBootRESTDemo.bean.Order_Menu;

@Service
public class MailContentBuilder {
	@Autowired
	private TemplateEngine templateEngine;
	
	
	public MailContentBuilder(TemplateEngine templateEngine) {
		this.templateEngine = templateEngine;
	}
	
	public String build(Order order) {
		Context context = new Context();
		Map<String,Object> variables = new HashMap<>();
		List<Order_Menu> o = order.getOrder_menu();
		variables.put("ordermenu", o);
		variables.put("totalprice", order.getTotal_price()*1.07);
		variables.put("totalorder", order.getTotal_order());
		context.setVariables(variables);
		return templateEngine.process("mailTemplate", context);
		
	}
}

package com.mercury.SpringBootRESTDemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.Order;

@Service
public class MailClient {
	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private MailContentBuilder mailContentBuilder;
	
	
	public MailClient(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}
	
	
	public void prepareAndSend(Order order) {
		MimeMessagePreparator messagePreparator = minMessage ->{
			MimeMessageHelper messageHelper = new MimeMessageHelper(minMessage);
			messageHelper.setFrom("msi.email.demo@gmail.com");
			messageHelper.setTo("terry19931217@hotmail.com");
			messageHelper.setSubject("Payment Processed");
			String content = mailContentBuilder.build(order);
			messageHelper.setText(content, true);
		};
		try {
			mailSender.send(messagePreparator);
		}catch(MailException e) {
			e.printStackTrace();
		}
	}
}

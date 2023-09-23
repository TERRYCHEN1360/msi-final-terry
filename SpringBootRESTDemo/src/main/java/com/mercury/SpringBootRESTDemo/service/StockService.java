package com.mercury.SpringBootRESTDemo.service;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.Stock;



@Service
public class StockService {
	
	@Autowired
	private SimpMessageSendingOperations messagingTemplate;

	List<Stock> stocks = Arrays.asList(new Stock("AMD", 24.18, null), new Stock("MSFT", 24.18, null),
			new Stock("TWTR", 24.18, null), new Stock("GOOGL", 24.18, null), new Stock("AMZN", 24.18, null),
			new Stock("FB", 24.18, null), new Stock("BABA", 24.18, null), new Stock("AAPL", 24.18, null));

	public void sendStocks() {
		while (true) {
			try {
				Thread.sleep(888);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			messagingTemplate.convertAndSend("/topic/stock", generateRandomStock());
		}
	}
	
	public Stock generateRandomStock() {
		Stock randomStock = stocks.get(new Random().nextInt(stocks.size()));
		randomStock.setPrice(getRadomPrice(randomStock.getPrice()));
		randomStock.setTime(LocalDateTime.now());
		return randomStock;
	}

	public double getRadomPrice(double original) {
		DecimalFormat df = new DecimalFormat("#.00");
		double randomPriceFactor = new Random().nextDouble();
		double randomPriceFlag = new Random().nextDouble() > 0.5 ? 0.01 : -0.01;
		return Double.valueOf(df.format(original * (1 + randomPriceFactor * randomPriceFlag)));
	}
	
}

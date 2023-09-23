package com.mercury.SpringBootRESTDemo.bean;

import java.time.LocalDateTime;

public class Stock {

	private String symbol;
	private double price;
	private LocalDateTime time;

	public Stock() {
		super();
	}

	public Stock(String symbol, double price, LocalDateTime time) {
		super();
		this.symbol = symbol;
		this.price = price;
		this.time = time;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public LocalDateTime getTime() {
		return time;
	}

	public void setTime(LocalDateTime time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "Stock [symbol=" + symbol + ", price=" + price + ", time=" + time + "]";
	}

}

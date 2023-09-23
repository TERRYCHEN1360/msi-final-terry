package com.mercury.SpringBootRESTDemo.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="PROJECT_CUSTOMER")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PROJECT_CUSTOMER_SEQ_GEN")
	@SequenceGenerator(name = "PROJECT_CUSTOMER_SEQ_GEN", sequenceName = "PROJECT_CUSTOMER_SEQ", allocationSize = 1)
	private int id;
	@Column
	private String address;
	@Column
	private String city;
	@Column
	private String state;
	@Column
	private int zip;
	@Column
	private String country;
	@Column
	private String email;
	@Column
	private double phone;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer( String address, String city, String state, int zip, String country, String email,
			double phone) {
		super();
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.country = country;
		this.email = email;
		this.phone = phone;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getZip() {
		return zip;
	}
	public void setZip(int zip) {
		this.zip = zip;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getPhone() {
		return phone;
	}
	public void setPhone(double phone) {
		this.phone = phone;
	}
	
	
}

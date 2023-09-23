package com.mercury.SpringBootRESTDemo.bean;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "PROJECT_WORKINGTIME")
public class EmployeeWorkingTime implements Comparable<EmployeeWorkingTime>{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PROJECT_WORKINGTIME_SEQ_GEN")
	@SequenceGenerator(name = "PROJECT_WORKINGTIME_SEQ_GEN", sequenceName = "PROJECT_WORKINGTIME_SEQ", allocationSize = 1)
	private int id;
	@Column
	private LocalDateTime login_time;
	@Column
	private LocalDateTime logout_time;
	@ManyToOne
	@JsonIgnoreProperties("employeeWorkingTime")
	@JoinColumn(name = "user_detail_id")
	private UserDetail userdetail;

	public EmployeeWorkingTime() {
		super();
		// TODO Auto-generated constructor stub
	}
	


	public EmployeeWorkingTime(LocalDateTime login_time, LocalDateTime logout_time, UserDetail userdetail) {
		super();
		this.login_time = login_time;
		this.logout_time = logout_time;
		this.userdetail = userdetail;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getLogin_time() {
		return login_time;
	}

	public void setLogin_time(LocalDateTime login_time) {
		this.login_time = login_time;
	}

	public LocalDateTime getLogout_time() {
		return logout_time;
	}

	public void setLogout_time(LocalDateTime logout_time) {
		this.logout_time = logout_time;
	}

	public UserDetail getUserdetail() {
		return userdetail;
	}

	public void setUserdetail(UserDetail userdetail) {
		this.userdetail = userdetail;
	}



	@Override
	public int compareTo(EmployeeWorkingTime o) {
		return this.login_time.compareTo(o.getLogin_time());
	}

}

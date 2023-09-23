package com.mercury.SpringBootRESTDemo.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "PROJECT_USER_DETAIL")
public class UserDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PROJECT_USER_DETAIL_SEQ_GEN")
	@SequenceGenerator(name = "PROJECT_USER_DETAIL_SEQ_GEN", sequenceName = "PROJECT_USER_DETAIL_SEQ", allocationSize = 1)
	private int id;
	@Column
	private String last_name;
	@Column
	private String first_name;
	@Column
	private int ssn;
	@Column
	private String email;
	@Column
	private int salary;
	@Column
	private long phone;
	@OneToOne
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties("userDetail")
	private User user;
	@OneToMany(mappedBy = "userdetail", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<EmployeeWorkingTime> employeeWorkingTime;

	public UserDetail() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDetail(int id, String last_name, String first_name, int ssn, String email, int salary, long phone,
			User user, List<EmployeeWorkingTime> employeeWorkingTime) {
		super();
		this.id = id;
		this.last_name = last_name;
		this.first_name = first_name;
		this.ssn = ssn;
		this.email = email;
		this.salary = salary;
		this.phone = phone;
		this.user = user;
		this.employeeWorkingTime = employeeWorkingTime;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public int getSsn() {
		return ssn;
	}

	public void setSsn(int ssn) {
		this.ssn = ssn;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<EmployeeWorkingTime> getEmployeeWorkingTime() {
		return employeeWorkingTime;
	}

	public void setEmployeeWorkingTime(List<EmployeeWorkingTime> employeeWorkingTime) {
		this.employeeWorkingTime = employeeWorkingTime;
	}

}

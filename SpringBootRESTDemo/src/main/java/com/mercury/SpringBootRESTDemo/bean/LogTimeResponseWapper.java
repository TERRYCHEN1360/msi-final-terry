package com.mercury.SpringBootRESTDemo.bean;

import com.mercury.SpringBootRESTDemo.http.Response;

public class LogTimeResponseWapper {

	private EmployeeWorkingTime employeeWorkingTime;
	private Response response;

	public LogTimeResponseWapper() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LogTimeResponseWapper(EmployeeWorkingTime employeeWorkingTime, Response response) {
		super();
		this.employeeWorkingTime = employeeWorkingTime;
		this.response = response;
	}

	public EmployeeWorkingTime getEmployeeWorkingTime() {
		return employeeWorkingTime;
	}

	public void setEmployeeWorkingTime(EmployeeWorkingTime employeeWorkingTime) {
		this.employeeWorkingTime = employeeWorkingTime;
	}

	public Response getResponse() {
		return response;
	}

	public void setResponse(Response response) {
		this.response = response;
	}

}

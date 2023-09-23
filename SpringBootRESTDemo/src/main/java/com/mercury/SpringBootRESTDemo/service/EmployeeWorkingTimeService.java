package com.mercury.SpringBootRESTDemo.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mercury.SpringBootRESTDemo.bean.EmployeeWorkingTime;
import com.mercury.SpringBootRESTDemo.bean.LogTimeResponseWapper;
import com.mercury.SpringBootRESTDemo.bean.User;
import com.mercury.SpringBootRESTDemo.dao.EmployeeWorkingTimeDao;
import com.mercury.SpringBootRESTDemo.dao.UserDao;
import com.mercury.SpringBootRESTDemo.http.Response;

@Service
public class EmployeeWorkingTimeService {

	@Autowired
	UserDao userDao;

	@Autowired
	EmployeeWorkingTimeDao employeeWorkingTimeDao;

	public void logtime(User user) {
		try {
		
			User u = userDao.findById(user.getId()).get();
			List<EmployeeWorkingTime> e = u.getUserDetail().getEmployeeWorkingTime();
			EmployeeWorkingTime t = new EmployeeWorkingTime(LocalDateTime.now(), null, u.getUserDetail());
			e.add(t);
			userDao.save(u);
		} catch (Exception e) {
			
		}
	}

	public void outTime(User user) {
		try {
			User u = userDao.findById(user.getId()).get();

//			Comparator<EmployeeWorkingTime> datecompare = new Comparator<EmployeeWorkingTime>() {
//
//				@Override
//				public int compare(EmployeeWorkingTime o1, EmployeeWorkingTime o2) {
//					return o1.getLogin_time().compareTo(o2.getLogin_time());
//				}
//
//			};
//
//			Collections.sort(u.getUserDetail().getEmployeeWorkingTime(), datecompare);
			List<EmployeeWorkingTime> l = u.getUserDetail().getEmployeeWorkingTime().stream().sorted().collect(Collectors.toList());
			u.getUserDetail().setEmployeeWorkingTime(l);
			u.getUserDetail().getEmployeeWorkingTime().forEach((e) -> {
				if ((u.getUserDetail().getEmployeeWorkingTime().indexOf(e)) == (u.getUserDetail().getEmployeeWorkingTime().size() - 1))
					e.setLogout_time(LocalDateTime.now());
			});
			
			userDao.save(u);

		} catch (Exception e) {

		}
	}

	public LogTimeResponseWapper changelogtime(EmployeeWorkingTime employeeWorkingTime) {
		try {
			System.out.println(LocalDateTime.now());
			System.out.println(employeeWorkingTime.getLogin_time());
			EmployeeWorkingTime emp = employeeWorkingTimeDao.findById(employeeWorkingTime.getId()).get();
			emp.setLogin_time(employeeWorkingTime.getLogin_time());
			emp.setLogout_time(employeeWorkingTime.getLogout_time());
			employeeWorkingTimeDao.save(emp);
			return (new LogTimeResponseWapper(employeeWorkingTimeDao.findById(employeeWorkingTime.getId()).get(),
					new Response(true)));
		} catch (Exception e) {
			return (new LogTimeResponseWapper(employeeWorkingTimeDao.findById(employeeWorkingTime.getId()).get(),
					new Response(false)));
		}
	}
}

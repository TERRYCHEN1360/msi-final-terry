package com.mercury.SpringBootRESTDemo.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "project_user_profile")
public class UserProfile implements GrantedAuthority{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "PROJECT_USER_PROFILE_SEQ_GEN")
	@SequenceGenerator(name = "PROJECT_USER_PROFILE_SEQ_GEN", sequenceName = "PROJECT_USER_PROFILE_SEQ", allocationSize = 1)
	private int id;
	@Column
	private String type;

	public UserProfile() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserProfile(int id) {
		super();
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String getAuthority() {
		return type;
	}

}

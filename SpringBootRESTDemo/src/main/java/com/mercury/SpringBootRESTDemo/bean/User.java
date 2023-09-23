package com.mercury.SpringBootRESTDemo.bean;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "project_user")
public class User implements UserDetails {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ")
	@SequenceGenerator(name = "SEQ", sequenceName = "PROJECT_USER_SEQ", allocationSize = 1)
	private long id;
	@NotNull
	@Size(min = 2, message = "username should be more than 2 characters")
	@Column(name = "username", unique = true, nullable = false)
	private String username;
	@NotNull
	@Column(name = "password", nullable = false)
	private String password;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "project_user_project_user_pro", joinColumns = {
			@JoinColumn(name = "user_id", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "user_profile_id", referencedColumnName = "id") })
	private List<UserProfile> profile;
	
	
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	private UserDetail userDetail;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(long id, @NotNull @Size(min = 2, message = "username should be more than 2 characters") String username,
			@NotNull String password, List<UserProfile> profile, UserDetail userDetail) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.profile = profile;
		this.userDetail = userDetail;
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<UserProfile> getProfile() {
		return profile;
	}

	public void setProfile(List<UserProfile> profile) {
		this.profile = profile;
	}

	public UserDetail getUserDetail() {
		return userDetail;
	}

	public void setUserDetail(UserDetail userDetail) {
		this.userDetail = userDetail;
	}
	
	

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return profile;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}

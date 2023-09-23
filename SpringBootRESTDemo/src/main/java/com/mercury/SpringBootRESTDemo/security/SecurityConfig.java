package com.mercury.SpringBootRESTDemo.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.mercury.SpringBootRESTDemo.handler.AccessDeniedHandlerImpl;
import com.mercury.SpringBootRESTDemo.handler.AuthenticationEntryPointImpl;
import com.mercury.SpringBootRESTDemo.handler.AuthenticationFailureHandlerImpl;
import com.mercury.SpringBootRESTDemo.handler.AuthenticationSuccessHandlerImpl;
import com.mercury.SpringBootRESTDemo.handler.LogoutSuccessHandlerImpl;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	UserDetailsService userDetailsService;
	
	@Autowired
	AuthenticationSuccessHandlerImpl authenticationSuccessHandlerImpl;
	
	@Autowired
	AuthenticationFailureHandlerImpl authenticationFailureHandlerImpl;
	
	@Autowired
	AuthenticationEntryPointImpl authenticationEntryPointImpl;
	
	@Autowired
	AccessDeniedHandlerImpl accessDeniedHandlerImpl;
	
	@Autowired
	LogoutSuccessHandlerImpl logoutSuccessHandlerImpl;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//turn off cstf
		http.csrf().disable();
		//login
		http.formLogin()
			.loginProcessingUrl("/login") //login is implemented by spring
			.usernameParameter("username")
			.passwordParameter("password")
			.successHandler(authenticationSuccessHandlerImpl)
			.failureHandler(authenticationFailureHandlerImpl);
		//authorization
//		http.authorizeRequests()
//			.antMatchers("/test.html").permitAll()
//			.antMatchers(HttpMethod.GET, "/samples").authenticated()
//			.antMatchers(HttpMethod.GET,"/products").hasAnyRole("USER","ADMIN")
//			.antMatchers(HttpMethod.GET,"/orders").hasAnyRole("ADMIN");
		//error handling: user accessed authenticated resource
		http.exceptionHandling().authenticationEntryPoint(authenticationEntryPointImpl);
		//errorhandling: user access authroizated resource
		http.exceptionHandling().accessDeniedHandler(accessDeniedHandlerImpl);
		//remember me
		http.rememberMe();
		//logout
		http.logout()
			.logoutUrl("/logout")
			.logoutSuccessHandler(logoutSuccessHandlerImpl);
		http.cors();
	}
	
	//create a passwordencoder bean in spring ioc container.
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(11);
	}
	
	
	//let spring know we want to use userdetailsservice
	@Autowired
	public void setup(AuthenticationManagerBuilder builder) throws Exception {
		builder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}
	
	/*
	 * cors support
	 */
	@Bean
    CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
//		configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        configuration.addAllowedOrigin("*"); // You should only set trusted site here. e.g. http://localhost:4200 means only this site can access.
        configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE","HEAD","OPTIONS"));
        configuration.addAllowedHeader("*");
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
	
}

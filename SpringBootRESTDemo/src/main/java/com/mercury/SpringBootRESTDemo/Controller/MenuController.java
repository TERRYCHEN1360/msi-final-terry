package com.mercury.SpringBootRESTDemo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mercury.SpringBootRESTDemo.bean.Menu;
import com.mercury.SpringBootRESTDemo.bean.MenuResponseWapper;
import com.mercury.SpringBootRESTDemo.service.MenuService;

@RestController
public class MenuController {
	
	@Autowired
	MenuService menuService;
	
	@GetMapping(value="/menu")
	public List<Menu> getMenu(){
		return menuService.findAllMenu();
	}
	
	@DeleteMapping(value="/deletemenu/{id}")
	public MenuResponseWapper delmenu(@PathVariable int id) {
		return menuService.delMenu(id);
	}
	
	@PostMapping(value="/addmenu")
	public MenuResponseWapper postMenu(@RequestBody Menu menu) {
		return menuService.newfood(menu);
	}
	
	@PutMapping(value="/editmenu")
	public MenuResponseWapper editMenu(@RequestBody List<Menu> menu) {
		return menuService.editMenu(menu);
	}
	
}

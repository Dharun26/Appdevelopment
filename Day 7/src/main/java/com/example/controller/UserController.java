package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.service.UserService;

import com.example.constants.*;


@RestController
@RequestMapping(Api.USER)
public class UserController {
	@Autowired
	UserService uService;
	
	
	@GetMapping("/getAll")
	public List<User> getAll() {
		
		return uService.getAll();
	}
}

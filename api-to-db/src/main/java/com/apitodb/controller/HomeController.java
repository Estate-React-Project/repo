package com.apitodb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping(path = { "/", "/home", "/dashboard" })
	public String home() {
		
		return "home";
	}
	
}

package com.apitodb.controller;

public class TestController {

	public static void main(String[] args) {
		
		int count = 2600;
		int rCount = 1000;
		
		double countB = 2600.0;
		double rCountB = 1000.0;
		
		int result = (int) Math.ceil(count / rCount);
		double resultB = Math.ceil(countB / rCountB);
		
		System.out.println(count / rCount);
		System.out.println(result);
		System.out.println(resultB);
		
	}

}

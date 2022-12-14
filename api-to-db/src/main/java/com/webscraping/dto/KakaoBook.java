package com.webscraping.dto;

import java.util.Date;

import lombok.Data;

@Data
public class KakaoBook {
	
	private String title;
	private String contents;
	private String url;
	private String isbn;
	private Date datetime;
	private String[] authors;
	private String publisher;
	private String[] translators;
	private int price;
	private int sale_price;
	private String thumbnail;
	private String status;

}

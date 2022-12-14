package com.realestate.api;

import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.io.BufferedReader;
import java.io.IOException;

public class AptInfoAPI {
	public static void main(String[] args) throws IOException {
		
		StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088");
		
		/* URL */
		urlBuilder.append("/" + URLEncoder.encode("52796a6a767772793838637770714b", "UTF-8"));
		urlBuilder.append("/" + URLEncoder.encode("xml", "UTF-8"));		
		urlBuilder.append("/" + URLEncoder.encode("OpenAptInfo", "UTF-8"));
		
		/* 서비스명 (대소문자 구분 필수입니다.) */
		urlBuilder.append("/" + URLEncoder.encode("1", "UTF-8"));
		urlBuilder.append("/" + URLEncoder.encode("5", "UTF-8"));
		
		/* 추가 요청인자들 */
		urlBuilder.append("/" + URLEncoder.encode("8", "UTF-8")); // 주소(시군구)
		urlBuilder.append("/" + URLEncoder.encode("9", "UTF-8")); // 주소(읍면동)
		urlBuilder.append("/" + URLEncoder.encode("17", "UTF-8")); // k-세대타입(분양형태)
		urlBuilder.append("/" + URLEncoder.encode("18", "UTF-8")); // k-관리방식
		urlBuilder.append("/" + URLEncoder.encode("19", "UTF-8")); // k-복도유형
		urlBuilder.append("/" + URLEncoder.encode("20", "UTF-8")); // k-난방방식
		urlBuilder.append("/" + URLEncoder.encode("21", "UTF-8")); // k-전체동수
		
		URL url = new URL(urlBuilder.toString());
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		conn.setRequestProperty("Content-type", "application/xml");
		
		System.out.println("Response code: " + conn.getResponseCode());
		
		BufferedReader rd;
		
		if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
			rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		} else {
			rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
		}
		StringBuilder sb = new StringBuilder();
		String line;
		while ((line = rd.readLine()) != null) {
			sb.append(line);
		}
		rd.close();
		conn.disconnect();
		
		System.out.println(sb.toString());
	}
}

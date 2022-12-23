package com.apitodb.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

import com.apitodb.dto.NaverEstateNewsDto;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;

@Controller
public class NaverNewsOpenApiController {
   
   private static HttpURLConnection connect(String apiUrl){
        try {
            URL url = new URL(apiUrl); // URL : 네트워크 요청 처리 클래스
            return (HttpURLConnection)url.openConnection();
        } catch (MalformedURLException e) {
            throw new RuntimeException("API URL이 잘못되었습니다. : " + apiUrl, e);
        } catch (IOException e) {
            throw new RuntimeException("연결이 실패했습니다. : " + apiUrl, e);
        }
    }
   private static String readBody(InputStream body){
        InputStreamReader streamReader = new InputStreamReader(body);

        try (BufferedReader lineReader = new BufferedReader(streamReader)) {
            StringBuilder responseBody = new StringBuilder();

            String line;
            while ((line = lineReader.readLine()) != null) {
                responseBody.append(line);
            }

            return responseBody.toString();
        } catch (IOException e) {
            throw new RuntimeException("API 응답을 읽는 데 실패했습니다.", e);
        }
    }
   private static String get(String apiUrl, Map<String, String> requestHeaders){
        HttpURLConnection con = connect(apiUrl);
        try {
            con.setRequestMethod("GET");
            for(Map.Entry<String, String> header :requestHeaders.entrySet()) {
                con.setRequestProperty(header.getKey(), header.getValue());
            }

            int responseCode = con.getResponseCode(); // 요청 전송 + 응답 수신
            if (responseCode == HttpURLConnection.HTTP_OK) { // 정상 호출
                return readBody(con.getInputStream());
            } else { // 오류 발생
                return readBody(con.getErrorStream());
            }
        } catch (IOException e) {
            throw new RuntimeException("API 요청과 응답 실패", e);
        } finally {
            con.disconnect();
        }
    }
   
   @CrossOrigin
   @GetMapping(path = { "estate-news" }, produces="application/json" )
   @ResponseBody   
   public HashMap<String, Object> searchEstateNews(int start, int display) {
      
      String clientId = "X0QBrrWvnWQAQc7gXMYQ"; //애플리케이션 클라이언트 아이디
        String clientSecret = "1z58T0DdZE"; //애플리케이션 클라이언트 시크릿

        String text = null;
        try {
            text = URLEncoder.encode("부동산", "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        String apiURL = "https://openapi.naver.com/v1/search/news?query=" + text; 

        apiURL += String.format("&start=%d&display=%d", start, display);

        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("X-Naver-Client-Id", clientId);
        requestHeaders.put("X-Naver-Client-Secret", clientSecret);
        
//        String response = get(apiURL, requestHeaders);        
//        System.out.println(response);        
//        return response;
                
        HashMap<String, Object> response = new HashMap<>();
        try {
           HttpURLConnection conn = connect(apiURL);
           conn.setRequestMethod("GET");
            for(Map.Entry<String, String> header :requestHeaders.entrySet()) {
                conn.setRequestProperty(header.getKey(), header.getValue());
            }

            int responseCode = conn.getResponseCode(); // 요청 전송 + 응답 수신
            if (responseCode == HttpURLConnection.HTTP_OK) { // 정상 호출
               
                InputStream is = conn.getInputStream();
               InputStreamReader isr = new InputStreamReader(is);
               
               JsonElement root = JsonParser.parseReader(isr);
               JsonObject obj = root.getAsJsonObject();
               
               Gson gson = new Gson();
//               
               TypeToken<ArrayList<NaverEstateNewsDto>> collectionType = new TypeToken<ArrayList<NaverEstateNewsDto>>(){};
               ArrayList<NaverEstateNewsDto> results = gson.fromJson(obj.get("items"), collectionType);
               response.put("result", "success");
               response.put("estateNews", results);
               //System.out.println(results);
                
            }
        } catch (Exception ex) {
           ex.printStackTrace();
           response.put("result", "fail");
           
        }
        
        return response;
      
   }

}
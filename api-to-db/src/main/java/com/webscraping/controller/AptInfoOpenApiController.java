package com.webscraping.controller;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import com.webscraping.dto.KakaoBook;

@Controller
@RequestMapping(path = "/openapi")
public class AptInfoOpenApiController {

	@GetMapping(path = { "/aptInfo" })
	public String showKakaoImageSearchForm() {

		return "openapi/apitest";
	}

	@GetMapping(path = { "/search-aptInfo" })
	// @ResponseBody
	// public HashMap<String, Object> searchAptInfo(Model model) {
	public String searchAptInfo(Model model) {
		
		HashMap<String, Object> response = new HashMap<>();
		
		try {
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
	        
	        
	        // API 내용 가져오기
	        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	        DocumentBuilder builder = factory.newDocumentBuilder();
	        
	        Document doc = builder.parse(conn.getInputStream()); // xml 문자열 -> 객체 트리
	        
	        NodeList rows = doc.getElementsByTagName("row");
	        
	        ArrayList<HashMap<String, Object>> data = new ArrayList<>();
	        
	        for (int i = 0; i < rows.getLength(); i++) {
	        	Node node = rows.item(i); // Node : tag, text, cdatasection, pi, declaration,
	        	//System.out.println("Node Type : " + node.getNodeType());
	        	//System.out.println("Node Name : " + node.getNodeName());
	        	
	        	HashMap<String, Object> tmp = new HashMap<>();
	        	NodeList children = node.getChildNodes();
	        	for (int j = 0; j < children.getLength(); j++) {
	        		Node child = children.item(j);
	        		//System.out.print(j + ". Node Type : " + child.getNodeType() + " / ");
	        		//System.out.print("Node Name : " + child.getNodeName() + " / ");
	        		//System.out.println("Node Value : " + child.getTextContent());
	        		if (child.getNodeType() == 1) {
	        			tmp.put(child.getNodeName(), child.getTextContent());
	        		}
	        	}
	        	data.add(tmp);
	        }
	        
	        model.addAttribute("data", data);
	        
	        // DB에 저장하는 코드
	        
	        Connection conn2 = null;			// 연결과 관련된 JDBC 호출 규격 ( 인터페이스 )
			PreparedStatement pstmt = null;	// 명령 실행과 관련된 JDBC 호출 규격 ( 인터페이스 )
			
			try {
				// 1. Driver 등록
				// DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
				Class.forName("com.mysql.cj.jdbc.Driver");
				
				// 2. 연결 및 연결 객체 가져오기
				conn2 = DriverManager.getConnection(
						"jdbc:mysql://43.201.107.251:3306/realestate", 		// 데이터베이스 연결 정보
						"team2", "team2"); 						// 데이터베이스 계정 정보
				
				// 3. SQL 작성 + 명령 객체 가져오기
				String sql = 
						"INSERT INTO  ( ) " +
						"VALUES (?)"; // ? : 나중에 채워질 영역 표시
				pstmt = conn2.prepareStatement(sql);
//				pstmt.setString(1, .get());		// SQL의 1번째 ?를 대체할 데이터
				
				// 4. 명령 실행
				pstmt.executeUpdate(); // executeUpdate : select 이외의 SQL에 사용하는 메서드
				
				// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)

			} catch (Exception ex) {
				ex.printStackTrace(); // 개발 용도로 사용
			} finally {
				// 6. 연결 닫기
				try { pstmt.close(); } catch (Exception ex) {}
				try { conn2.close(); } catch (Exception ex) {}
			}
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		return "openapi/apitest";

	}
}

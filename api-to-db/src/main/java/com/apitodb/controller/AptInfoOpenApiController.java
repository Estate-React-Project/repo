package com.apitodb.controller;

import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.apitodb.dto.AptInfoDto;

@Controller
@RequestMapping(path = "/openapi")
public class AptInfoOpenApiController {

	@GetMapping(path = { "/aptInfo" })
	public String searchAptInfo(Model model) {
		
		try {
			// 샘플만 있는 URL
			StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088");

			// URL
//			StringBuilder urlBuilder = new StringBuilder("");
			urlBuilder.append("/" + URLEncoder.encode("52796a6a767772793838637770714b", "UTF-8"));
			urlBuilder.append("/" + URLEncoder.encode("xml", "UTF-8"));		
			urlBuilder.append("/" + URLEncoder.encode("OpenAptInfo", "UTF-8"));
			
			// 서비스명 (대소문자 구분 필수입니다.)
			urlBuilder.append("/" + URLEncoder.encode("1", "UTF-8"));
			urlBuilder.append("/" + URLEncoder.encode("5", "UTF-8"));
	        
	        URL url = new URL(urlBuilder.toString());
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("GET");
	        conn.setRequestProperty("Content-type", "application/xml");
	        
	        
	        // API 내용 가져오기
	        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	        DocumentBuilder builder = factory.newDocumentBuilder();
	        
	        Document doc = builder.parse(conn.getInputStream()); // xml 문자열 -> 객체 트리
	        
	        NodeList rows = doc.getElementsByTagName("row");
	        
	        List<AptInfoDto> infos = new ArrayList<AptInfoDto>();
	        
	        for (int i = 0; i < rows.getLength(); i++) {

	        	Element node = (Element)rows.item(i);
	        	
	        	AptInfoDto info = new AptInfoDto();
	        	
	        	info.setAptNm(node.getElementsByTagName("APT_NM").item(0).getTextContent());
	        	info.setAdresGu(node.getElementsByTagName("ADRES_GU").item(0).getTextContent());
	        	info.setAdresDong(node.getElementsByTagName("ADRES_DONG").item(0).getTextContent());
	        	info.setHshldrTy(node.getElementsByTagName("HSHLDR_TY").item(0).getTextContent());
	        	info.setGnrlManagectManageStle(node.getElementsByTagName("GNRL_MANAGECT_MANAGE_STLE").item(0).getTextContent());
	        	info.setCrrdprTy(node.getElementsByTagName("CRRDPR_TY").item(0).getTextContent());
	        	info.setHeatMthd(node.getElementsByTagName("HEAT_MTHD").item(0).getTextContent());
	        	info.setAllDongCo(Integer.parseInt(node.getElementsByTagName("ALL_DONG_CO").item(0).getTextContent()));
	        	
	        	infos.add(info);
	        }
	        
	        model.addAttribute("infos", infos);
	        
	        // DB에 저장하는 코드
//	        Connection conn2 = null;			// 연결과 관련된 JDBC 호출 규격 ( 인터페이스 )
//			PreparedStatement pstmt = null;	// 명령 실행과 관련된 JDBC 호출 규격 ( 인터페이스 )
//			
//			try {
//				// 1. Driver 등록
//				// DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
//				Class.forName("com.mysql.cj.jdbc.Driver");
//				
//				// 2. 연결 및 연결 객체 가져오기
//				conn2 = DriverManager.getConnection(
//						"jdbc:mysql://43.201.107.251:3306/realestate", 		// 데이터베이스 연결 정보
//						"team2", "team2"); 						// 데이터베이스 계정 정보
//				
//				// 3. SQL 작성 + 명령 객체 가져오기
//				String sql = 
//						"INSERT INTO  ( ) " +
//						"VALUES (?)"; // ? : 나중에 채워질 영역 표시
//				pstmt = conn2.prepareStatement(sql);
//				
//				// 4. 명령 실행
//				pstmt.executeUpdate(); // executeUpdate : select 이외의 SQL에 사용하는 메서드
//				
//				// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
//
//			} catch (Exception ex) {
//				ex.printStackTrace(); // 개발 용도로 사용
//			} finally {
//				// 6. 연결 닫기
//				try { pstmt.close(); } catch (Exception ex) {}
//				try { conn2.close(); } catch (Exception ex) {}
//			}
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		return "openapi/aptInfo";

	}
}

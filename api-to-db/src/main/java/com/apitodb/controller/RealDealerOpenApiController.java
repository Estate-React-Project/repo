package com.apitodb.controller;

import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.apitodb.dto.RealDealerDto;

@Controller
@RequestMapping(path = "/openapi")
public class RealDealerOpenApiController {

	@GetMapping(path = { "/realDealer" })
	public String searchRealDealer(Model model) {
		
		try {
			StringBuilder urlBuilder2 = new StringBuilder("http://openapi.seoul.go.kr:8088");  // URL
			urlBuilder2.append("/" + URLEncoder.encode("63676545666d696c393751634f6b44", "UTF-8"));
			urlBuilder2.append("/" + URLEncoder.encode("xml", "UTF-8"));		
			urlBuilder2.append("/" + URLEncoder.encode("landBizInfo", "UTF-8"));	// 서비스명 (대소문자 구분 필수입니다.)
			urlBuilder2.append("/" + URLEncoder.encode("1", "UTF-8"));
			urlBuilder2.append("/" + URLEncoder.encode("5", "UTF-8"));
	        
	        URL url2 = new URL(urlBuilder2.toString());
			HttpURLConnection connn = (HttpURLConnection) url2.openConnection();
	        connn.setRequestMethod("GET");
	        connn.setRequestProperty("Content-type", "application/xml");
	        
	        DocumentBuilderFactory factory2 = DocumentBuilderFactory.newInstance();
	        DocumentBuilder builder2 = factory2.newDocumentBuilder();
	        
	        Document doc2 = builder2.parse(connn.getInputStream()); // xml 문자열 -> 객체 트리
	        
	        NodeList realDealerInfo = doc2.getElementsByTagName("landBizInfo");
	        
	        Element node2 = (Element)realDealerInfo.item(0);
	        
	        double count = Integer.parseInt(node2.getElementsByTagName("list_total_count").item(0).getTextContent());
			double rCount = Math.ceil(count / 1000);
	        
			for (int i = 0; i < rCount; i++) { // 데이터 조회 for문 시작
				StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088");	// URL
				urlBuilder.append("/" + URLEncoder.encode("63676545666d696c393751634f6b44", "UTF-8")); // OPEN API KEY
				urlBuilder.append("/" + URLEncoder.encode("xml", "UTF-8"));		
				urlBuilder.append("/" + URLEncoder.encode("landBizInfo", "UTF-8"));	// 서비스명 (대소문자 구분 필수입니다.)
				urlBuilder.append("/" + URLEncoder.encode(String.format("%d", 1 + (i * 1000)), "UTF-8"));
				urlBuilder.append("/" + URLEncoder.encode(String.format("%d", 1000 + (i * 1000)), "UTF-8"));
		        
		        URL url = new URL(urlBuilder.toString());
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		        conn.setRequestMethod("GET");
		        conn.setRequestProperty("Content-type", "application/xml");
		        
		        // API 내용 가져오기
		        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		        DocumentBuilder builder = factory.newDocumentBuilder();
		        
		        Document doc = builder.parse(conn.getInputStream()); // xml 문자열 -> 객체 트리
		        
		        NodeList rows = doc.getElementsByTagName("row");
		        
		        List<RealDealerDto> infos = new ArrayList<RealDealerDto>();
		        
		        for (int j = 0; j < rows.getLength(); j++) {
	
		        	Element node = (Element)rows.item(j);
		        	
		        	RealDealerDto info = new RealDealerDto();
		        	
		        	info.setRdealerNm(node.getElementsByTagName("RDEALER_NM").item(0).getTextContent());
		        	info.setRaRegno(Integer.parseInt(node.getElementsByTagName("RA_REGNO").item(0).getTextContent()));
		        	info.setAddress(node.getElementsByTagName("ADDRESS").item(0).getTextContent());
		        	info.setCmpNm(node.getElementsByTagName("CMP_NM").item(0).getTextContent());
		        	info.setTelNo(Integer.parseInt(node.getElementsByTagName("TELNO").item(0).getTextContent()));
		        	info.setStsGbn(node.getElementsByTagName("STS-GBN").item(0).getTextContent());
		        	info.setSggNm(node.getElementsByTagName("SGG_NM").item(0).getTextContent());
		        	
		        	infos.add(info);
		        }
		        
		        model.addAttribute("infos", infos);
		        
		        // DB에 저장하는 코드
		        Connection conn2 = null;			// 연결과 관련된 JDBC 호출 규격 ( 인터페이스 )
				PreparedStatement pstmt = null;	// 명령 실행과 관련된 JDBC 호출 규격 ( 인터페이스 )
				
				try {
					// 1. Driver 등록
					Class.forName("com.mysql.cj.jdbc.Driver");
					
					// 2. 연결 및 연결 객체 가져오기
					conn2 = DriverManager.getConnection(
							"jdbc:mysql://43.201.107.251:3306/realestate", 		// 데이터베이스 연결 정보
							"team2", "team2"); 						// 데이터베이스 계정 정보
					
					// 3. SQL 작성 + 명령 객체 가져오기
					for (int k = 0; k < infos.size(); k++) {
						String sql = 
								"INSERT INTO RealDealer (rdealerNm, raRegno, address, cmpNm, telNo, stsGbn, sggNm) " +
								"VALUES (?, ?, ?, ?, ?, ?, ?) "; // ? : 나중에 채워질 영역 표시
						pstmt = conn2.prepareStatement(sql);
						pstmt.setString(1, infos.get(k).getRdealerNm());
						pstmt.setInt(2, infos.get(k).getRaRegno());
						pstmt.setString(3, infos.get(k).getAddress());
						pstmt.setString(4, infos.get(k).getCmpNm());
						pstmt.setInt(5, infos.get(k).getTelNo());
						pstmt.setString(6, infos.get(k).getStsGbn());
						pstmt.setString(7, infos.get(k).getSggNm());
						
						// 4. 명령 실행
						pstmt.executeUpdate(); // executeUpdate : select 이외의 SQL에 사용하는 메서드
					}
					
				} catch (Exception ex) {
					ex.printStackTrace(); // 개발 용도로 사용
				} finally {
					// 6. 연결 닫기
					try { pstmt.close(); } catch (Exception ex) {}
					try { conn2.close(); } catch (Exception ex) {}
				}
				
			} // 데이터 조회 for문 끝
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		return "openapi/realDealer";
	}
	
}
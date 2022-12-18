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

import com.apitodb.dto.AptDealDto;

@Controller
@RequestMapping(path = "/openapi")
public class AptDealOpenApiController {

	@GetMapping(path = { "/aptDeal" })
	public String searchAptInfo(Model model) {
		
		try {
			// 반복문 횟수 정하기 위한 코드
			StringBuilder urlBuilder2 = new StringBuilder("http://openapi.seoul.go.kr:8088");
			
			// URL
			urlBuilder2.append("/" + URLEncoder.encode("52796a6a767772793838637770714b", "UTF-8"));
			urlBuilder2.append("/" + URLEncoder.encode("xml", "UTF-8"));		
			urlBuilder2.append("/" + URLEncoder.encode("TvApsizesStatus", "UTF-8"));
			
			// 서비스명 (대소문자 구분 필수입니다.)
			urlBuilder2.append("/" + URLEncoder.encode("1", "UTF-8"));
			urlBuilder2.append("/" + URLEncoder.encode("1000", "UTF-8"));
	        
	        URL url2 = new URL(urlBuilder2.toString());
			HttpURLConnection connn = (HttpURLConnection) url2.openConnection();
	        connn.setRequestMethod("GET");
	        connn.setRequestProperty("Content-type", "application/xml");
	        
	        DocumentBuilderFactory factory2 = DocumentBuilderFactory.newInstance();
	        DocumentBuilder builder2 = factory2.newDocumentBuilder();
	        
	        Document doc2 = builder2.parse(connn.getInputStream()); // xml 문자열 -> 객체 트리
	        
	        NodeList openAptDeal = doc2.getElementsByTagName("TvApsizesStatus");
	        
	        Element node2 = (Element)openAptDeal.item(0);
	        
	        double count = Integer.parseInt(node2.getElementsByTagName("list_total_count").item(0).getTextContent());
			double rCount = Math.ceil(count / 1000);
	        
			for (int i = 0; i < rCount; i++) { // 데이터 조회 for문 시작
				StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088");
	
				// URL
				urlBuilder.append("/" + URLEncoder.encode("52796a6a767772793838637770714b", "UTF-8"));
				urlBuilder.append("/" + URLEncoder.encode("xml", "UTF-8"));		
				urlBuilder.append("/" + URLEncoder.encode("TvApsizesStatus", "UTF-8"));
				
				// 서비스명 (대소문자 구분 필수입니다.)
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
		        
		        List<AptDealDto> infos = new ArrayList<AptDealDto>();
		        
		        for (int j = 0; j < rows.getLength(); j++) {
	
		        	Element node = (Element)rows.item(j);
		        	
		        	AptDealDto info = new AptDealDto();
		        	
		        	info.setAdresGu(node.getElementsByTagName("GUNAME").item(0).getTextContent());
		        	info.setAdresDong(node.getElementsByTagName("DONG_NM").item(0).getTextContent());
		        	info.setDealYear(Integer.parseInt(node.getElementsByTagName("DYYYY").item(0).getTextContent()));
		        	info.setGunA(Integer.parseInt(node.getElementsByTagName("GUN_A").item(0).getTextContent()));
		        	String prCntA = node.getElementsByTagName("PR_A").item(0).getTextContent();
		        	System.out.println(prCntA);
		        	prCntA.replaceAll(",", "");
		        	prCntA.replaceAll(" ", "");
		        	System.out.println(prCntA);
		        	info.setPrA(Double.parseDouble(prCntA == "" ? "0" : prCntA));
		        	
		        	info.setGunB(Integer.parseInt(node.getElementsByTagName("GUN_B").item(0).getTextContent()));
		        	String prCntB = node.getElementsByTagName("PR_B").item(0).getTextContent();
		        	prCntB.replaceAll(",", "");
		        	info.setPrB(Double.parseDouble(prCntB == "" ? "0" : prCntB));
		        	
		        	info.setGunC(Integer.parseInt(node.getElementsByTagName("GUN_C").item(0).getTextContent()));
		        	String prCntC = node.getElementsByTagName("PR_C").item(0).getTextContent();
		        	prCntC.replaceAll(",", "");
		        	info.setPrC(Double.parseDouble(prCntC == "" ? "0" : prCntC));
		        	
		        	info.setGunD(Integer.parseInt(node.getElementsByTagName("GUN_D").item(0).getTextContent()));
		        	String prCntD = node.getElementsByTagName("PR_D").item(0).getTextContent();
		        	prCntD.replaceAll(",", "");
		        	info.setPrD(Double.parseDouble(prCntD == "" ? "0" : prCntD));
		        	
		        	info.setGunE(Integer.parseInt(node.getElementsByTagName("GUN_E").item(0).getTextContent()));
		        	String prCntE = node.getElementsByTagName("PR_E").item(0).getTextContent();
		        	prCntE.replaceAll(",", "");
		        	info.setPrE(Double.parseDouble(prCntE == "" ? "0" : prCntE));
		        	
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
								"INSERT INTO AptDeal (ADRES_GU, ADRES_DONG, DEAL_YEAR, GUN_A, PR_A, GUN_B, PR_B, GUN_C, PR_C, GUN_D, PR_D, GUN_E, PR_E) " +
								"VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) "; // ? : 나중에 채워질 영역 표시
						pstmt = conn2.prepareStatement(sql);
						pstmt.setString(1, infos.get(k).getAdresGu());
						pstmt.setString(2, infos.get(k).getAdresDong());
						pstmt.setInt(3, infos.get(k).getDealYear());
						pstmt.setInt(4, infos.get(k).getGunA());
						pstmt.setDouble(5, infos.get(k).getPrA());
						pstmt.setInt(6, infos.get(k).getGunB());
						pstmt.setDouble(7, infos.get(k).getPrB());
						pstmt.setInt(8, infos.get(k).getGunC());
						pstmt.setDouble(9, infos.get(k).getPrC());
						pstmt.setInt(10, infos.get(k).getGunD());
						pstmt.setDouble(11, infos.get(k).getPrD());
						pstmt.setInt(12, infos.get(k).getGunE());
						pstmt.setDouble(13, infos.get(k).getPrE());
						
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
		
		return "openapi/aptDeal";

	}
}

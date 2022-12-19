package com.apitodb.controller;

import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.apitodb.dto.RealTradeDto;
import com.apitodb.dto.RentDto;

@Controller
@RequestMapping(path = "/openapi")
public class RentOpenApiController {

	@GetMapping(path = { "/rent" })
	public String searchRent(Model model) {
		
		try {
			// 반복문 횟수 정하기 위한 코드
			StringBuilder urlBuilder2 = new StringBuilder("http://openapi.seoul.go.kr:8088");
			
			// URL
			urlBuilder2.append("/" + URLEncoder.encode("6d54535546726c613130377949757352", "UTF-8"));
			urlBuilder2.append("/" + URLEncoder.encode("xml", "UTF-8"));		
			urlBuilder2.append("/" + URLEncoder.encode("tbLnOpendataRentV", "UTF-8"));
			
			// 서비스명 (대소문자 구분 필수입니다.)
			urlBuilder2.append("/" + URLEncoder.encode("1", "UTF-8"));
			urlBuilder2.append("/" + URLEncoder.encode("5", "UTF-8"));
	        
	        URL url2 = new URL(urlBuilder2.toString());
			HttpURLConnection connn = (HttpURLConnection) url2.openConnection();
	        connn.setRequestMethod("GET");
	        connn.setRequestProperty("Content-type", "application/xml");
	        
	        DocumentBuilderFactory factory2 = DocumentBuilderFactory.newInstance();
	        DocumentBuilder builder2 = factory2.newDocumentBuilder();
	        
	        Document doc2 = builder2.parse(connn.getInputStream()); // xml 문자열 -> 객체 트리
	        
	        NodeList openRealTrade = doc2.getElementsByTagName("tbLnOpendataRentV");
	        // System.out.println(openRealTrade);
	        
	        Element node2 = (Element)openRealTrade.item(0);
	        // System.out.println(node2);
	        
	        double count = Integer.parseInt(node2.getElementsByTagName("list_total_count").item(0).getTextContent());
			double rCount = Math.ceil(count / 1000);
	        
			 for (int i = 0; i < rCount; i++) { // 데이터 조회 for문 시작
				StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088");
	
				// URL
				urlBuilder.append("/" + URLEncoder.encode("6d54535546726c613130377949757352", "UTF-8"));
				urlBuilder.append("/" + URLEncoder.encode("xml", "UTF-8"));		
				urlBuilder.append("/" + URLEncoder.encode("tbLnOpendataRentV", "UTF-8"));
				
				// 서비스명 (대소문자 구분 필수입니다.)
				urlBuilder.append("/" + URLEncoder.encode(String.format("%d", 1 + (i * 1000)), "UTF-8"));
				urlBuilder.append("/" + URLEncoder.encode(String.format("%d", 1000 + (i * 1000)), "UTF-8"));
		        
				urlBuilder.append("/" + URLEncoder.encode("2022", "UTF-8"));
				
		        URL url = new URL(urlBuilder.toString());
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		        conn.setRequestMethod("GET");
		        conn.setRequestProperty("Content-type", "application/xml");
		        
		        
		        // API 내용 가져오기
		        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		        DocumentBuilder builder = factory.newDocumentBuilder();
		        
		        Document doc = builder.parse(conn.getInputStream()); // xml 문자열 -> 객체 트리
		        
		        NodeList rows = doc.getElementsByTagName("row");
		        
		        List<RentDto> infos = new ArrayList<>();
		        
		        for (int j = 0; j < rows.getLength(); j++) {
		        
	
		        	Element node = (Element)rows.item(j);
		        	
		        	RentDto info = new RentDto();
		        	
		        	// info.setRentCode(Integer.parseInt(node.getElementsByTagName("RENT_CODE").item(0).getTextContent()));
		        	info.setAccYear(node.getElementsByTagName("ACC_YEAR").item(0).getTextContent());
		        	info.setCntrctDe(node.getElementsByTagName("CNTRCT_DE").item(0).getTextContent());
		        	info.setCntrctPrd(node.getElementsByTagName("CNTRCT_PRD").item(0).getTextContent()); 
		        	info.setRentGbn(node.getElementsByTagName("RENT_GBN").item(0).getTextContent());
		        	info.setSggCd(node.getElementsByTagName("SGG_CD").item(0).getTextContent());
		        	info.setSggNm(node.getElementsByTagName("SGG_NM").item(0).getTextContent());
		        	info.setBjdongCd(node.getElementsByTagName("BJDONG_CD").item(0).getTextContent());
		        	info.setBjdongNm(node.getElementsByTagName("BJDONG_NM").item(0).getTextContent());
		        	info.setRentArea(node.getElementsByTagName("RENT_AREA").item(0).getTextContent());
		        	info.setRentGtn(node.getElementsByTagName("RENT_GTN").item(0).getTextContent());
		        	info.setRentFee(node.getElementsByTagName("RENT_FEE").item(0).getTextContent());
		        	info.setBldgNm(node.getElementsByTagName("BLDG_NM").item(0).getTextContent());
		        	info.setBuildYear(node.getElementsByTagName("BUILD_YEAR").item(0).getTextContent());
		        	info.setHouseGbnNm(node.getElementsByTagName("HOUSE_GBN_NM").item(0).getTextContent());
		        	String flrCnt = node.getElementsByTagName("FLR_NO").item(0).getTextContent();
		        	info.setFlrNo(Integer.parseInt(flrCnt == "" ? "0" : flrCnt));
		        	
		        	infos.add(info);
		        }
		        
		        model.addAttribute("infos", infos);
		        
				// DB에 저장하는 코드
				Connection conn2 = null; // 연결과 관련된 JDBC 호출 규격 ( 인터페이스 )
				PreparedStatement pstmt = null; // 명령 실행과 관련된 JDBC 호출 규격 ( 인터페이스 )

				try {
					// 1. Driver 등록
					Class.forName("com.mysql.cj.jdbc.Driver");

					// 2. 연결 및 연결 객체 가져오기
					conn2 = DriverManager.getConnection("jdbc:mysql://43.201.107.251:3306/realestate", // 데이터베이스 연결 정보
							"team2", "team2"); // 데이터베이스 계정 정보

					// 3. SQL 작성 + 명령 객체 가져오기
					for (int k = 0; k < infos.size(); k++) {
						String sql = "INSERT INTO Rent (ACC_YEAR, CNTRCT_DE, CNTRCT_PRD, RENT_GBN, SGG_CD, SGG_NM, BJDONG_CD, BJDONG_NM, RENT_AREA, RENT_GTN, RENT_FEE, BLDG_NM, BUILD_YEAR, HOUSE_GBN_NM, FLR_NO) "
								+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) "; // ? : 나중에 채워질 영역 표시
						pstmt = conn2.prepareStatement(sql);
						pstmt.setString(1, infos.get(k).getAccYear());
						pstmt.setString(2, infos.get(k).getCntrctDe());
						pstmt.setString(3, infos.get(k).getCntrctPrd());
						pstmt.setString(4, infos.get(k).getRentGbn());
						pstmt.setString(5, infos.get(k).getSggCd());
						pstmt.setString(6, infos.get(k).getSggNm());
						pstmt.setString(7, infos.get(k).getBjdongCd());
						pstmt.setString(8, infos.get(k).getBjdongNm());
						pstmt.setString(9, infos.get(k).getRentArea());
						pstmt.setString(10, infos.get(k).getRentGtn());
						pstmt.setString(11, infos.get(k).getRentFee());
						pstmt.setString(12, infos.get(k).getBldgNm());
						pstmt.setString(13, infos.get(k).getBuildYear());
						pstmt.setString(14, infos.get(k).getHouseGbnNm());
						pstmt.setInt(15, infos.get(k).getFlrNo());

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
		
		return "openapi/Rent";

	}
	
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadRentYearlyCount" })
	public HashMap<String, Object> searchRentYearlyData() {
		
		HashMap<String, Object> data = new HashMap<>();
		
		// DB에 저장하는 코드
		Connection conn = null; // 연결과 관련된 JDBC 호출 규격 ( 인터페이스 )
		PreparedStatement pstmt = null; // 명령 실행과 관련된 JDBC 호출 규격 ( 인터페이스 )
		ResultSet rs = null;

		try {
			// 1. Driver 등록
			Class.forName("com.mysql.cj.jdbc.Driver");

			// 2. 연결 및 연결 객체 가져오기
			conn = DriverManager.getConnection("jdbc:mysql://43.201.107.251:3306/realestate", // 데이터베이스 연결 정보
					"team2", "team2"); // 데이터베이스 계정 정보

			// 3. SQL 작성 + 명령 객체 가져오기
			String sql = " SELECT COUNT(CASE WHEN hshldrTy = '분양' then 1 end) hshldrTy1, "
					+ "	   	  COUNT(CASE WHEN hshldrTy = '임대' then 1 end) hshldrTy2, "
					+ "       COUNT(CASE WHEN hshldrTy = '영구임대' then 1 end) hshldrTy3, "
					+ "       COUNT(CASE WHEN hshldrTY = '임대+분양' then 1 end) hshldrTy4, "
					+ "       COUNT(CASE WHEN hshldrTy = '' OR hshldrTy = '기타' then 1 end) hshldrTy5, "
					+ "       COUNT(CASE WHEN gnrlManagectManageStle = '직영' then 1 end) gnrlManagectManageStle1, "
					+ "       COUNT(CASE WHEN gnrlManagectManageStle = '위탁관리' then 1 end) gnrlManagectManageStle2, "
					+ "       COUNT(CASE WHEN gnrlManagectManageStle = '자치관리' then 1 end) gnrlManagectManageStle3, "
					+ "       COUNT(CASE WHEN gnrlManagectManageStle = '직영+위탁' then 1 end) gnrlManagectManageStle4, "
					+ "       COUNT(CASE WHEN gnrlManagectManageStle = '' then 1 end) gnrlManagectManageStle15, "
					+ "       COUNT(CASE WHEN crrdprTy = '계단식' then 1 end) crrdprTy1, "
					+ "       COUNT(CASE WHEN crrdprTy = '복도식' then 1 end) crrdprTy2, "
					+ "       COUNT(CASE WHEN crrdprTy = '타워형' then 1 end) crrdprTy3, "
					+ "       COUNT(CASE WHEN crrdprTy = '혼합식' then 1 end) crrdprTy4, "
					+ "       COUNT(CASE WHEN crrdprTy = '' OR crrdprTy= '기타' then 1 end) crrdprTy5, "
					+ "       COUNT(CASE WHEN heatMthd = '지역난방' then 1 end) heatMthd1, "
					+ "       COUNT(CASE WHEN heatMthd = '중앙난방' then 1 end) heatMthd2, "
					+ "       COUNT(CASE WHEN heatMthd = '개별난방' then 1 end) heatMthd3, "
					+ "       COUNT(CASE WHEN heatMthd = '' OR heatMthd = '기타' then 1 end) heatMthd4, "
					+ "       COUNT(CASE WHEN allDongco >= 0 AND allDongco <= 10 then 1 end) allDongCo1, "
					+ "       COUNT(CASE WHEN allDongco >= 11 AND allDongco <= 20 then 1 end) allDongCo2, "
					+ "       COUNT(CASE WHEN allDongco >= 21 AND allDongco <= 30 then 1 end) allDongCo3, "
					+ "       COUNT(CASE WHEN allDongco >= 31 AND allDongco <= 40 then 1 end) allDongCo4, "
					+ "       COUNT(CASE WHEN allDongco >= 41 AND allDongco <= 50 then 1 end) allDongCo5, "
					+ "       COUNT(CASE WHEN allDongco >= 51 AND allDongco <= 60 then 1 end) allDongCo6, "
					+ "       COUNT(CASE WHEN allDongco >= 61 AND allDongco <= 70 then 1 end) allDongCo7, "
					+ "       COUNT(CASE WHEN allDongco >= 71 then 1 end) allDongCo8 "
					+ "FROM AptInfo;" ;
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
				for (int i = 1; i <= 27; i++) {
					data.put( "data" + i , rs.getInt(i));
				}
				
			}
		} catch (Exception ex) {
			ex.printStackTrace(); // 개발 용도로 사용
		} finally {
			// 6. 연결 닫기
			try {
				pstmt.close();
			} catch (Exception ex) {
			}
			try {
				conn.close();
			} catch (Exception ex) {
			}
		}

		return data;
	}
}

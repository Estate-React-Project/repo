package com.apitodb.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.apitodb.dto.RentYearlyDto;

@Controller
@RequestMapping(path = { "/openapi" })
public class YearlyRentOpenApiController {

	// 월별 통계
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadYearlyRentCountByMonth" })
	public HashMap<String, Object> searchRentYearlyDataByMonth() {
		
		HashMap<String, Object> yearlyCountData = new HashMap<>();
		
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
			String sql = "select COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202201%\" then 1 end),\n"
					+ "	  	 	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202202%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202203%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202204%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202205%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202206%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202207%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202208%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202209%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202210%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202211%\" then 1 end),\n"
					+ "       	 COUNT(CASE WHEN RENT_GBN = \"전세\" AND CNTRCT_DE LIKE \"202212%\" then 1 end)\n"
					+ "       from Rent";
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
				for (int i = 1; i <= 12; i++) {
					yearlyCountData.put( "dataByMonth" + i , rs.getInt(i));
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

		return yearlyCountData;
	}

	// 보증금 통계
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadYearlyRentCountByGuarantee" })
	public HashMap<String, Object> searchRentYearlyDataByGuarantee() {
		
		HashMap<String, Object> yearlyCountDataByGuarantee = new HashMap<>();
		
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
			String sql = "select COUNT(CASE WHEN RENT_GBN = '전세' AND RENT_GTN >= 80000 then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND RENT_GTN >= 60000 AND RENT_GTN < 80000 then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND RENT_GTN >= 40000 AND RENT_GTN < 60000 then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND RENT_GTN >= 20000 AND RENT_GTN < 40000 then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND RENT_GTN >= 0 AND RENT_GTN < 20000 then 1 end)"
					+ "       from Rent";
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
				for (int i = 1; i <= 5; i++) {
					yearlyCountDataByGuarantee.put( "dataByGuarantee" + i , rs.getInt(i));
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

		return yearlyCountDataByGuarantee;
	}
	
	// 구별 통계
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadYearlyRentCountByGu" })
	public HashMap<String, Object> searchRentYearlyDataByGu() {
		
		HashMap<String, Object> yearlyCountDataByGu = new HashMap<>();
		
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
			String sql = "select COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '강남구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '강동구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '강북구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '강서구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '관악구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '광진구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '구로구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '금천구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '노원구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '도봉구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '동대문구' then 1 end),\r\n"
					+ "		 	 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '동작구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '마포구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '서대문구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '서초구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '성동구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '성북구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '송파구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '양천구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '영등포구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '용산구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '은평구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '종로구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '중구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND SGG_NM = '중랑구' then 1 end)\r\n"
					+ "       from Rent";
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
				for (int i = 1; i <= 25; i++) {
					yearlyCountDataByGu.put( "dataByGu" + i , rs.getInt(i));
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

		return yearlyCountDataByGu;
	}
	
	// 건물 용도별 통계
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadYearlyRentCountByGBN" })
	public HashMap<String, Object> searchRentYearlyData() {
		
		HashMap<String, Object> yearlyCountDataByGBN = new HashMap<>();
		
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
			String sql = "select COUNT(CASE WHEN RENT_GBN = '전세' AND HOUSE_GBN_NM = '단독다가구' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND HOUSE_GBN_NM = '아파트' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND HOUSE_GBN_NM = '연립다세대' then 1 end),\r\n"
					+ "			 COUNT(CASE WHEN RENT_GBN = '전세' AND HOUSE_GBN_NM = '오피스텔' then 1 end)"
					+ "       from Rent";
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
				for (int i = 1; i <= 4; i++) {
					yearlyCountDataByGBN.put( "dataByGBN" + i , rs.getInt(i));
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

		return yearlyCountDataByGBN;
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadYearlyRentList" })
	public List<RentYearlyDto> searchYearlyRentList(String houseType, String keyword) {
		
		List<RentYearlyDto> yearlyLists = new ArrayList<>();
		
		if (houseType.length() == 0) {
			return yearlyLists;
		}
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			conn = DriverManager.getConnection("jdbc:mysql://43.201.107.251:3306/realestate", // 데이터베이스 연결 정보
					"team2", "team2");
			
			String sql = "SELECT * " +
						 "FROM Rent " +
						 "WHERE RENT_GBN = '전세' AND CNTRCT_DE LIKE '2022%' AND HOUSE_GBN_NM LIKE ? ";
			
			String[] columns = { "CNTRCT_DE", 
					"SGG_NM", 
					"BJDONG_NM", 
					"Bldg_Nm", 
					"Flr_NO", 
					"Rent_Gtn", 
					"Rent_Fee", 
					"rent_Area", 
					"Build_Year" };
			
			// sql 추
			if (keyword != null && keyword.length() > 0) {
				sql += " AND (" + columns[0] + " LIKE ? ";
				for (int i = 1; i < columns.length; i++) {
					sql += "OR " + columns[i] + " LIKE ? ";
				}
				sql += ")";
			}
			
			// 조건 삽입
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, '%' + houseType + '%');
			
			if (keyword != null && keyword.length() > 0) {
				for (int i = 0; i < columns.length; i++) {
					pstmt.setString(i + 2, "%" + keyword + "%");
				}
			}
			
			rs = pstmt.executeQuery();
			
			while (rs.next()) {
				RentYearlyDto yearlyList = new RentYearlyDto();
				
				yearlyList.setCntrctDe(rs.getString(3));
				yearlyList.setSggNm(rs.getString(7));
				yearlyList.setBjdongNm(rs.getString(9));
				yearlyList.setBldgNm(rs.getString(14));
				yearlyList.setFloor(rs.getString(10));
				yearlyList.setRentGtn(rs.getString(12));
				yearlyList.setRentFee(rs.getString(13));
				yearlyList.setBldgArea(rs.getString(11));
				yearlyList.setBuildYear(rs.getString(15));
				yearlyList.setHouseType(rs.getString(16));
				
				yearlyLists.add(yearlyList);
			}
			
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			try {
				rs.close();
			} catch (Exception ex) {
			}
			try {
				pstmt.close();
			} catch (Exception ex) {
			}
			try {
				conn.close();
			} catch (Exception ex) {
			}
		}
		
		return yearlyLists;
	}
	
	
}






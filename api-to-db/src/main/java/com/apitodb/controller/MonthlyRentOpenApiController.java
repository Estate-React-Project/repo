package com.apitodb.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping(path= {"/openapi"})
public class MonthlyRentOpenApiController {
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadMonthlyRentCount" })
	public HashMap<String, Object> searchMonthlyRentCountData() {

		HashMap<String, Object> monthlyCountData = new HashMap<>();
		
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
			String sql = "select COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202201%\" then 1 end),\n"
					+ "	   COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202202%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202203%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202204%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202205%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202206%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202207%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202208%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202209%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202210%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202211%\" then 1 end),\n"
					+ "       COUNT(CASE WHEN RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"202212%\" then 1 end)\n"
					+ "       from Rent";
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
				for (int i = 1; i <= 12; i++) {
					monthlyCountData.put( "data" + i , rs.getInt(i));
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

		return monthlyCountData;

	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadMonthlyGuRentCount" })
	public HashMap<String, Object> searchMonthlyRentCountDataByGu() {

		HashMap<String, Object> monthlyGuCountData = new HashMap<>();
		
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
			String sql = "select COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"강남구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"강동구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"강북구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"강서구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"관악구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"광진구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"구로구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"금천구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"노원구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"도봉구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"동대문구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"동작구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"마포구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"서대문구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"서초구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"성동구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"성북구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"송파구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"양천구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"영등포구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"용산구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"은평구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"종로구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"중구\" then 1 end),\n"
					+ "COUNT(CASE WHEN RENT_GBN = \"월세\" AND SGG_NM LIKE \"중랑구\" then 1 end)\n"
					+ "From Rent;";
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
				for (int i = 1; i <= 25; i++) {
					monthlyGuCountData.put( "gudata" + i , rs.getInt(i));
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

		return monthlyGuCountData;

	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadMonthlyGbnRentCount" })
	public HashMap<String, Object> searchMonthlyRentCountDataByGbn() {

		HashMap<String, Object> monthlyGbnCountData = new HashMap<>();
		
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
			String sql = "select COUNT(CASE WHEN HOUSE_GBN_NM = \"오피스텔\" then 1 end),\n"
					+ "	   COUNT(CASE WHEN HOUSE_GBN_NM = \"단독다가구\" then 1 end),\n"
					+ "	   COUNT(CASE WHEN HOUSE_GBN_NM = \"연립다세대\" then 1 end),\n"
					+ "	   COUNT(CASE WHEN HOUSE_GBN_NM = \"오피스텔\" then 1 end)\n"
					+ "	   FROM Rent;";
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
				for (int i = 1; i <= 4; i++) {
					monthlyGbnCountData.put( "data" + i , rs.getInt(i));
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

		return monthlyGbnCountData;

	}
}


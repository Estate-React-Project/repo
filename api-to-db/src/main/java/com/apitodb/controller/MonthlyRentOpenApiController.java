package com.apitodb.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.management.StandardEmitterMBean;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.apitodb.dto.RentMonthlyDto;


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
			String sql = "select COUNT(CASE WHEN HOUSE_GBN_NM = \"아파트\" then 1 end),\n"
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
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadMonthlyRentChart" })
	public List<RentMonthlyDto> searchMonthlyRentChart(String houseType, String keyword) {	
		List<RentMonthlyDto> months = new ArrayList<>();
		
		if(houseType.length() == 0) {
			return months;
		}
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
			String sql = "select *\n"
					+ "from Rent\n"
					+ "where RENT_GBN = \"월세\" AND CNTRCT_DE LIKE \"2022%\" AND HOUSE_GBN_NM LIKE ? ";
			
			String[] columns = { "CNTRCT_DE",
								 "SGG_NM",
								 "BJDONG_NM",
								 "Bldg_NM",
								 "FLR_NO",
								 "RENT_GTN",
								 "RENT_FEE",
								 "RENT_AREA",
								 "BUILD_YEAR"
			};
			
			// sql 추가
			if (keyword != null && keyword.length() > 0) {
				sql+= " AND (" + columns[0] + " LIKE ? ";
				for (int i = 1; i < columns.length; i++) {
					sql += "OR " + columns[i] + " LIKE ? ";
				}
				sql += ")";
			}
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, '%' + houseType + '%');
			
			if (keyword != null && keyword.length() > 0) {
				for (int i = 0; i < columns.length; i++) {
					pstmt.setString(i + 2, "%" + keyword + "%");
				}
			}

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				RentMonthlyDto month = new RentMonthlyDto();
				
				month.setCntrctDe(rs.getString(3));
				month.setSggNm(rs.getString(7));
				month.setBjdongNm(rs.getString(9));
				month.setBldgNm(rs.getString(14));
				month.setFloor(rs.getString(10).equals("0") ? "단일" : rs.getString(10));
				month.setRentGtn(rs.getString(12));
				month.setRentFee(rs.getString(13));
				month.setBldgArea(rs.getString(11));
				month.setBuildYear(rs.getString(15).equals("") ? "XXXX" : rs.getString(15));
				month.setHouseType(rs.getString(16));
				
				months.add(month);
				
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

		return months;

	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadRentBuildCount" })
	public HashMap<String, Object> searchRentCountDataByBuildYear() {

		HashMap<String, Object> rentBuildCountData = new HashMap<>();
		
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
			String sql = "select COUNT(CASE WHEN BUILD_YEAR > 1970 AND BUILD_YEAR < 1980 then 1 end),\n"
					+ "	   		 COUNT(CASE WHEN BUILD_YEAR > 1980 AND BUILD_YEAR < 1990 then 1 end),\n"
					+ "      	 COUNT(CASE WHEN BUILD_YEAR > 1990 AND BUILD_YEAR < 2000 then 1 end),\n"
					+ "     	 COUNT(CASE WHEN BUILD_YEAR > 2000 AND BUILD_YEAR < 2010 then 1 end),\n"
					+ "     	 COUNT(CASE WHEN BUILD_YEAR > 2010 AND BUILD_YEAR < 2022 then 1 end)\n"
					+ "From Rent";
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
				for (int i = 1; i <= 5; i++) {
					rentBuildCountData.put( "data" + i , rs.getInt(i));
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

		return rentBuildCountData;

	}
	
	// 대쉬보드 전세 전체 카운트
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadMonthlyRentDashboard" })
	public HashMap<String, Object> DashboardMonthlyRentList() {

		HashMap<String, Object> monthlyRentAllCount = new HashMap<>();

		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");

			conn = DriverManager.getConnection("jdbc:mysql://43.201.107.251:3306/realestate", // 데이터베이스 연결 정보
					"team2", "team2");

			String sql = "SELECT count(case when RENT_GBN = '월세' AND CNTRCT_DE LIKE '2022%' then 1 end) FROM Rent";

			pstmt = conn.prepareStatement(sql);

			rs = pstmt.executeQuery();

			while (rs.next()) {

				DecimalFormat commaFormat = new DecimalFormat("###,###");
				String count = commaFormat.format(rs.getInt(1));

				monthlyRentAllCount.put("dataCount", count);
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

		return monthlyRentAllCount;
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = { "/loadDashboardRealDealerCount" })
	public HashMap<String, Object> loadDashboardRealDealerCount() {

		HashMap<String, Object> dashboardRealDealerCount = new HashMap<>();
		
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
			String sql = "SELECT COUNT(*) FROM RealDealer ";
			pstmt = conn.prepareStatement(sql);

			// 4. 명령 실행
			rs = pstmt.executeQuery();
			// 5. 결과 처리 (결과가 있다면 - SELECT 명령을 실행한 경우)
			while (rs.next()) { // 결과 집합의 다음 행으로 이동
				
					DecimalFormat commaFormat = new DecimalFormat("###,###");
					String count = commaFormat.format(rs.getInt(1));
					
					dashboardRealDealerCount.put("data", count);
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

		return dashboardRealDealerCount;

	}
		
}


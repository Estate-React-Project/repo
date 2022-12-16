package com.apitodb.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
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

import com.apitodb.dto.AptInfoDto;
import com.apitodb.dto.RealDealerDto;

@Controller
@RequestMapping(path = "/openapi")
public class RealDealerOpenApiController {

	@GetMapping(path = { "realDealer" })
	public String searchRealDealer(Model model) {
		
		try {
			// 샘플만 있는 URL
			StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088"); /*URL*/
			urlBuilder.append("/" +  URLEncoder.encode("63676545666d696c393751634f6b44","UTF-8") ); /*인증키 (sample사용시에는 호출시 제한됩니다.)*/
			urlBuilder.append("/" +  URLEncoder.encode("xml","UTF-8") ); /*요청파일타입 (xml,xmlf,xls,json) */
			urlBuilder.append("/" + URLEncoder.encode("CardSubwayStatsNew","UTF-8")); /*서비스명 (대소문자 구분 필수입니다.)*/
			urlBuilder.append("/" + URLEncoder.encode("1","UTF-8")); /*요청시작위치 (sample인증키 사용시 5이내 숫자)*/
			urlBuilder.append("/" + URLEncoder.encode("5","UTF-8")); /*요청종료위치(sample인증키 사용시 5이상 숫자 선택 안 됨)*/
			// 상위 5개는 필수적으로 순서바꾸지 않고 호출해야 합니다.
			
			// 서비스별 추가 요청 인자이며 자세한 내용은 각 서비스별 '요청인자'부분에 자세히 나와 있습니다.
			urlBuilder.append("/" + URLEncoder.encode("20220301","UTF-8")); /* 서비스별 추가 요청인자들*/
			
			URL url = new URL(urlBuilder.toString());
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-type", "application/xml");
			System.out.println("Response code: " + conn.getResponseCode()); /* 연결 자체에 대한 확인이 필요하므로 추가합니다.*/
			BufferedReader rd;

			// 서비스코드가 정상이면 200~300사이의 숫자가 나옵니다.
			if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
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
			
			// API 내용 가져오기
	        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	        DocumentBuilder builder = factory.newDocumentBuilder();
	        
	        Document doc = builder.parse(conn.getInputStream()); // xml 문자열 -> 객체 트리
	        
	        NodeList rows = doc.getElementsByTagName("row");
	        
	        List<RealDealerDto> infos = new ArrayList<RealDealerDto>();
	        
	        for (int i = 0; i < rows.getLength(); i++) {

	        	Element node = (Element)rows.item(i);
	        	
	        	RealDealerDto info = new RealDealerDto();
	        	
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
	        
			
			
			
		} catch (Exception ex) {
			ex.printStackTrace();
		
		}
		
		// model.addAttribute("realdealer", realdealer);
		
		return "openapi/realDealer";

	}
	
}
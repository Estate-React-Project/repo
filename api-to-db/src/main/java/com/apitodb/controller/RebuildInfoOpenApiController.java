package com.apitodb.controller;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

@Controller
@RequestMapping(path = "/openapi")
public class RebuildInfoOpenApiController {
	
	@CrossOrigin
	@GetMapping(path = { "/rebuildInfo" })
	@ResponseBody
	public ArrayList<HashMap<String, Object>> searchRebuildInfo(String gu) {
		
		ArrayList<HashMap<String, Object>> datas = new ArrayList<>();
		String key = "505550474a6761723732697a715362";
		
		if (gu.length() == 0) {
			return datas;
		}
		
		try {	
			
			URL url = new URL("http://openapi.seoul.go.kr:8088/" + key + "/xml/CleanupBussinessInfo/1/200/" + gu);
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("GET");
	        conn.setRequestProperty("Content-type", "application/xml");
	        
	        System.out.println("Response code: " + conn.getResponseCode());
	        
	        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	        DocumentBuilder builder = factory.newDocumentBuilder();
	        
	        Document doc = builder.parse(conn.getInputStream()); // xml 문자열 -> 객체 트리
	        
	        NodeList items = doc.getElementsByTagName("row");
	        
	        System.out.println(items.getLength());
	        
            for (int i = 0; i < items.getLength(); i++) {
            	Node item = items.item(i);
            	NodeList children = item.getChildNodes();
            	HashMap<String, Object> data = new HashMap<>(); // 한 편의 영화 저장 변수
            	for (int j = 0; j < children.getLength(); j++) {
            		Node child = children.item(j);
            		data.put(child.getNodeName(), child.getTextContent());
            		//System.out.println(child.getNodeName() + ": " + child.getTextContent());
            	}
            	//System.out.println(data);
            		datas.add(data);
            }	        
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return datas;
		
	}

//	@CrossOrigin
//	@ResponseBody
//	@GetMapping(path = { "/rebuildInfo" })
//	public List<RebuildInfoDto> searchRebuildInfo(String gu) {
//		
//	 List<RebuildInfoDto> rebuildInfos = new ArrayList<RebuildInfoDto>();
//		
//		try {
//			// 샘플만 있는 URL
//			StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088");
//
//			// URL
////			StringBuilder urlBuilder = new StringBuilder("");
//			urlBuilder.append("/" + URLEncoder.encode("505550474a6761723732697a715362", "UTF-8"));
//			urlBuilder.append("/" + URLEncoder.encode("xml", "UTF-8"));		
//			urlBuilder.append("/" + URLEncoder.encode("CleanupBussinessInfo", "UTF-8"));
//			
//			// 서비스명 (대소문자 구분 필수입니다.)
//			urlBuilder.append("/" + URLEncoder.encode("1", "UTF-8"));
//			urlBuilder.append("/" + URLEncoder.encode("200", "UTF-8"));
//	        
//			urlBuilder.append("/" + URLEncoder.encode(gu, "UTF-8"));
//						
//	        URL url = new URL(urlBuilder.toString());
//			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//	        conn.setRequestMethod("GET");
//	        conn.setRequestProperty("Content-type", "application/xml");
//	        
//	        
//	        // API 내용 가져오기
//	        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
//	        DocumentBuilder builder = factory.newDocumentBuilder();
//	        
//	        Document doc = builder.parse(conn.getInputStream()); // xml 문자열 -> 객체 트리
//	        
//	        NodeList rows = doc.getElementsByTagName("row");
//	        
//	        
//	        for (int i = 0; i < rows.getLength(); i++) {
//
//	        	Element node = (Element)rows.item(i);
//	        	
//	        	RebuildInfoDto info = new RebuildInfoDto();
//	        	
//	        	info.setBsnsPk(node.getElementsByTagName("BSNS_PK").item(0).getTextContent());
//	        	info.setGuNm(node.getElementsByTagName("GU_NM").item(0).getTextContent());
//	        	info.setBtypNm(node.getElementsByTagName("BTYP_NM").item(0).getTextContent());
//	        	info.setReprsntJibun(node.getElementsByTagName("REPRSNT_JIBUN").item(0).getTextContent());
//	        	info.setCafeSttus(node.getElementsByTagName("CAFE_STTUS").item(0).getTextContent());
//	        	info.setZoneAr(node.getElementsByTagName("ZONE_AR").item(0).getTextContent());
//	        	info.setTotar(node.getElementsByTagName("TOTAR").item(0).getTextContent());
//	        	info.setBildngHg(node.getElementsByTagName("BILDNG_HG").item(0).getTextContent());
//	        	info.setBildngGroundFloorCo(node.getElementsByTagName("BILDNG_GROUND_FLOOR_CO").item(0).getTextContent());
//	        	info.setBildngUndgrndFloorCo(node.getElementsByTagName("BILDNG_UNDGRND_FLOOR_CO").item(0).getTextContent());
//	        	info.setSumBildngCo(node.getElementsByTagName("SUM_BILDNG_CO").item(0).getTextContent());
//	        	info.setLocImg01(node.getElementsByTagName("LOCIMG01").item(0).getTextContent());
//	        	info.setLocImg02(node.getElementsByTagName("LOCIMG02").item(0).getTextContent());
//	        	info.setLocImg03(node.getElementsByTagName("LOCIMG03").item(0).getTextContent());
//	        	
//	        	rebuildInfos.add(info);
//	        }
//	        
//	        
//		} catch (Exception ex) {
//			ex.printStackTrace();
//		}
//		
//		return rebuildInfos;
//
//	}
}

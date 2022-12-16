package com.apitodb.dto;

import lombok.Data;

@Data
public class RealDealerDto {
	
	private String rdealerNm;		// 중개업자명	RDEALER_NM	(None)	VARCHAR(20)
	private int raRegno;			// 중개업등록번호	RA_REGNO	(None)	INT 
	private String address;			// 주소	ADDRESS	(None)	VARCHAR(50)
	private String cmpNm;			// 사업자상호	CMP_NM	(None)	VARCHAR(20) 
	private int telNo;				// 전화번호	TELNO	(None)	INT  
	private String stsGbn;			// 상태구분	STS_GBN	(None)	VARCHAR(10)
	private String sggNm;			// 자치구명	SGG_NM	(None)	VARCHAR(20)
	
	
}

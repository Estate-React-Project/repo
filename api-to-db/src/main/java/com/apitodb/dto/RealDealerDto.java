package com.apitodb.dto;

import lombok.Data;

@Data
public class RealDealerDto {
	
	private String RdealerNm;		// 중개업자명	RDEALER_NM	(None)	VARCHAR(20)
	private String RaRegno;			// 중개업등록번호	RA_REGNO	(None)	INT 
	private String Address;			// 주소	ADDRESS	(None)	VARCHAR(50)
	private String CmpNm;			// 사업자상호	CMP_NM	(None)	VARCHAR(20) 
	private String TelNo;				// 전화번호	TELNO	(None)	INT  
	private String StsGbn;			// 상태구분	STS_GBN	(None)	VARCHAR(10)
	private String SggNm;			// 자치구명	SGG_NM	(None)	VARCHAR(20)
	
	
}

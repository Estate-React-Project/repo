package com.apitodb.dto;

import lombok.Data;

@Data
public class RentMonthlyDto {
	private int CntrctDe;
	private String SggNm;
	private String BjdongNm;
	private String BldgNm;
	private int Floor;
	private int RentGtn;
	private int RentFee;
	private double BldgArea;
	private double TotArea;
	private int BuildYear;
	private String HouseType;
	private String ReqGbn;
	
	
}

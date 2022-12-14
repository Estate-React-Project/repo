<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코로나 발생 현황</title>
</head>
<body>
	${ data[0] }
	<hr>
	<table align="center">
		<tr>
			<th style="width:150px">확진자수</th>
			<td style="width:200px">${ data[0].hPntCnt }</td>
		</tr>
		<tr>
			<th>사망자수</th>
			<td>${ data[0].gPntCnt }</td>
		</tr>
	</table>
</body>
</html>
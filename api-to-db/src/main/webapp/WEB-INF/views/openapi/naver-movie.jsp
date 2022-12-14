<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>네이버 영화 검색</title>
</head>
<body>

	<h2>네이버 영화 검색</h2>
	<input type="text" id="movie-title">
	<button id="search-btn">검색</button>
	<hr>
	
	<table id="movie-list" border="1" style="width:700px;margin:0 auto">
	<thead>
		<tr>
			<th>포스터</th>
			<th>영화정보</th>
		</tr>
	</thead>
	<tbody>
	
	</tbody>
	</table>
	
	<script src="https://code.jquery.com/jquery-3.6.1.js"></script>
	<script type="text/javascript">
	$(function() {
		$('#search-btn').on('click', function(event) {
			const title = $('#movie-title').val();
			if (title.length == 0) {
				alert('검색어를 입력하세요');
				return;
			}
			
			$.ajax({
				"url": "search-movie",
				"data": "title=" + title,
				"method": "get",
				"dataType": "json",
				"success": function(response, status, xhr) {
					if (response.result == "success") {
						const tbody = $('#movie-list tbody');
						tbody.empty(); // 기존의 하위 요소(tr) 모두 제거
						const movies = response.movies;
						$.each(movies, function(idx, movie) {
							const tr = $("<tr></tr>");
							tbody.append(tr);
							tr.append('<td><img src="' + movie.image + '"></td>');
							
							const td = $('<td></td>');
							td.append('<p>제목 : <a href="' + movie.link + '">' + movie.title + '</a></p>');
							td.append('<p>부제 : ' + movie.subtitle + '</p>');
							td.append('<p>평점 : ' + movie.userRating + '</p>');							
							tr.append(td);
						});
					} else {
						alert(response.result);
					}
				},
				"error": function(xhr, status, err) {
					
				}
			});
			
		});
	});
	</script>

</body>
</html>
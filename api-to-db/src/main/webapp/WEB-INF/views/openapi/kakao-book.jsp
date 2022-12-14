<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>카카오 도서 검색</title>
</head>
<body>

	<h2>카카오 도서 검색</h2>
	<input type="text" id="book-title">
	<button id="search-btn">검색</button>
	<hr>
	
	<table id="book-list" border="1" style="width:700px;margin:0 auto">
	<thead>
	</thead>
	<tbody>	
	</tbody>
	</table>
	
	<script src="https://code.jquery.com/jquery-3.6.1.js"></script>
	<script type="text/javascript">
	$(function() {
		$('#search-btn').on('click', function(event) {
			const title = $('#book-title').val();
			if (title.length == 0) {
				alert('검색어를 입력하세요');
				return;
			}
			
			$.ajax({
				"url": "search-book",
				"data": "title=" + title,
				"method": "get",
				"dataType": "json",
				"success": function(response, status, xhr) {
					if (response.result == "success") {
						const tbody = $('#book-list tbody');
						tbody.empty(); // 기존의 하위 요소(tr) 모두 제거
						const books = response.books;
						let tr = null;
						$.each(books, function(idx, book) {
							if (idx % 4 == 0) {
								tr = $("<tr></tr>");
								tbody.append(tr);
							}							
							const td = $('<td></td>');
							td.append('<img src="' + book.thumbnail + '">')
							  .append(`<h4>\${book.title}</h4>`);
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
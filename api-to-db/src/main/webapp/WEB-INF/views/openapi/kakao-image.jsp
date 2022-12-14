<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>카카오 이미지 검색</title>
</head>
<body>

	<h2>카카오 이미지 검색</h2>
	<input type="text" id="image-name">
	<button id="search-btn">검색</button>
	<hr>
	
	<table id="image-list" border="1" style="width:700px;margin:0 auto">
	<thead>
	</thead>
	<tbody>	
	</tbody>
	</table>
	
	<script src="https://code.jquery.com/jquery-3.6.1.js"></script>
	<script type="text/javascript">
	$(function() {
		$('#search-btn').on('click', function(event) {
			const name = $('#image-name').val();
			if (name.length == 0) {
				alert('검색어를 입력하세요');
				return;
			}
			
			$.ajax({
				"url": "search-image",
				"data": "name=" + name,
				"method": "get",
				"dataType": "json",
				"success": function(response, status, xhr) {
					if (response.result == "success") {
						const tbody = $('#image-list tbody');
						tbody.empty(); // 기존의 하위 요소(tr) 모두 제거
						const images = response.images;
						let tr = null;
						$.each(images, function(idx, image) {
							if (idx % 4 == 0) {
								tr = $("<tr></tr>");
								tbody.append(tr);
							}							
							tr.append('<td><img src="' + image.thumbnail_url + '"></td>');							
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
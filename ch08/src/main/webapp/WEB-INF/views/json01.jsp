<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script type="text/javascript">
	$(function() {
		$.ajax({
			url : "${pageContext.request.contextPath }/api/json",
			async : true,
			type : "get",
			dataType : "json",
			success : function(response) {
				if (response.result !== "success") {
					console.log(response.message);
					return;
				}
				var html = "";
				html += ("<h1>" + response.data.no + "</h1>");
				html += ("<h2>" + response.data.name + "</h2>");
				html += ("<h1>" + response.data.message + "</h1>");

				$("#data").append(html);
			}
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test: JSON Format Data</h1>

	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>
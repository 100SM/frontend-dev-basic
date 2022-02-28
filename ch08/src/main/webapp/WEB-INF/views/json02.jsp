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
<script type="text/javascript">
	// DOM Load Event
	// 1. load 모두 다(DOM, CSSOM, img) 로딩
	// 2. DOMContentLoaded DOM만 로딩(CSSOM x, img x)
	window.addEventListener("DOMContentLoaded", function() {
		document.getElementsByTagName("button")[0].addEventListener("click", function() {
			var xhr = null;
			if (window.ActiveXObject) { // <= IE9
				xhr = new ActiveXObject("Microsoft");
			} else if(window.XMLHttpRequest){
				xhr = new XMLHttpRequest(); // Standard Browser	
			}else {
				console.log("Ajax 기능을 사용할 수 없습니다.");
				return ;
			}
			xhr.addEventListener("readystatechange", function() {
				if (this.readyState == XMLHttpRequest.UNSENT) { // readyStatd: 0
					// request가 초기화 되기 전
					console.log("State: UNSENT");
				} else if (this.readyState == XMLHttpRequest.OPENED) { // readyStatd: 1
					// 서버와 연결이 성공
					console.log("State: OPENED");
				} else if (this.readyState == XMLHttpRequest.HEADERS_RECEIVED) { // readyStatd: 2
					// 서버가 reqeust를 받음
					console.log("State: HEADERS_RECEIVED");
				} else if (this.readyState == XMLHttpRequest.LOADING) { // readyStatd: 3
					// response 처리 중(response body 파싱 중)
					console.log("State: LOADING");
				} else if (this.readyState == XMLHttpRequest.DONE) { // readyStatd: 4
					// response 처리 끝남(response body 파싱 완료)
					console.log("State: DONE");
				
					if(this.status != 200){
						console.error("error: ", this.state);
						return;
					}
					console.log(this.responseText, typeof(this.responseText));
					
					var response = JSON.parse(this.responseText);
					console.log(response, typeof(response));
					
					var html = "";
					html += ("<h1>" + response.data.no + "</h1>");
					html += ("<h2>" + response.data.name + "</h2>");
					html += ("<h1>" + response.data.message + "</h1>");

					document.getElementById("data").innerHTML += html;
				}
			});
	
			xhr.open("get", "${pageContext.request.contextPath }/api/json", true);
			xhr.send();
			});
	});
</script>
</head>
<body>
	<h1>AJAX Test: JSON Format Data: XmlHttpRequest를 직접 사용하기</h1>

	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>
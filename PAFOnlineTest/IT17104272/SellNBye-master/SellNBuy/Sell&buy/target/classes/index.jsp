<%@ page language="java" contentType="text/html; charset=ISO-8859-1"     pageEncoding="ISO-8859-1"%> 
 
<!DOCTYPE html> 
<html> 
<head> 
<meta charset="ISO-8859-1"> 
<title>Login</title> 
<script type="text/javascript" src=Controllers/jQuery.js></script> 
<script type="text/javascript" src=Controllers/controllerMain.js></script> 
 
</head> 
<body>   
  <form id="formLogin" action="index.jsp" method="post">  UserName <input id="txtUserName" name="txtUserName" type="text"> <br>  Password <input id="txtPassword" name="txtPassword" type="password"> <br>  <input id="btnLogin" name="btnLogin" type="button" value="Login"> <br>  <div id="divStsMsgLogin"></div>     </form> 
 
</body> 
</html> 
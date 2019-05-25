// ==CONTROLLER===================================================================== 
 
// == User ============================================== 
 
// --Login-------------------------------------- $(document).on("click", "#btnLogin", function()
{  $("#divStsMsgLogin").html("");  var result = isValidFormLogin(); 
// use client-Model 
 
 if (result == "true") 
 {  
	 $.ajax(   { 
		 type : "post",    url : "UserLogin",    data : $("#formLogin").serialize(),    complete : function(response, status)    {     onLogingComplete(response.responseText, status);    }   });  }  else  {   $("#divStsMsgLogin").html(result);  } }); 
 
function onLogingComplete(response, status) {
	if (status == "success")  {   if (response == "SUCCESS")   {    document.location = "items.jsp";   }   else   {    $("#divStsMsgLogin").html(response);   }  }  else if (status == "error")  {   $("#divStsMsgLogin").html("Error while authenticating");  }  else  {   $("#divStsMsgLogin").html("Unknown error while authenticating");  } }   


//== Items ====================================================================== 

//--Refresh------------------------------------- $(document).on("click", "#btnRefresh", function() {  $("#divStsMsgItem").html("Loading..."); 

$.ajax(  {   type : "get",   url : "Item",   complete : function(response, status)   {    onRefreshComplete(response.responseText, status);   }  }); }); 

function onRefreshComplete(response, status) {  if (status == "success")  {   $("#divItemsTable").html(response);   $("#divStsMsgItem").html("Loaded successfully");  }  else if (status == "error")  {   $("#divStsMsgItem").html("Error while loading");  }  else  {   $("#divStsMsgItem").html("Unknown error while loading");  } } 

//--Save------------------------------------- $(document).on("click", "#btnSave", function() {  var validity = isValidFormItem(); 

if (validity == "true")  {   var method = "post";   if ($("#hidItemID").val() != "0")   {    method = "put";   } 

$("#divStsMsgItem").html("Saving..."); 

$.ajax(   {    type : method,    url : "Item",    data : $("#formItems").serialize(),    complete : function(response, status)    {     onSaveUpdateComplete(response.responseText, status);    }   });  }  else 
5 
{   $("#divStsMsgItem").html(validity);  } }); 

function onSaveUpdateComplete(response, status) {  if (status == "success")  {   $("#formItems")[0].reset();   $("#divItemsTable").html(response);   $("#divStsMsgItem").html("Saved successfully");   $("#hidItemID").val("0");  }  else if (status == "error")  {   $("#divStsMsgItem").html("Error while saving");  }  else  {   $("#divStsMsgItem").html("Unknown error while saving");  } } 


//--Edit------------------------------------------------------- $(document).on("click", "#btnEdit", function() {  $("#hidItemID").val($(this).data("itemid"));  $("#txtItemName").val($(this).closest("tr").find("td:eq(1)").text());  $("#txtItemDesc").val($(this).closest("tr").find("td:eq(2)").text()); }); 

//--Delete----------------------------------------------------- $(document).on("click", "#btnRemove", function() {  $("#divStsMsgItem").html("Removing..."); 

$.ajax(  {   type : "delete",   url : "Item",   data : "itemID=" + $(this).data("itemid"),   complete : function(response, status)   {    onItemDeleteComplete(response.responseText, status);   }  }); }); 

function onItemDeleteComplete(response, status) {  if (status == "success")  {   $("#divItemsTable").html(response);   $("#divStsMsgItem").html("Removed successfully");  }  else if (status == "error")  {   $("#divStsMsgItem").html("Error while removing");  }  else  {   $("#divStsMsgItem").html("Unknown error while removing");  } } 

//READ protected void doGet(HttpServletRequest request, HttpServletResponse       response) throws ServletException, IOException  {  com.RiWA.Model.Item item = new com.RiWA.Model.Item();  response.getWriter().append(item.getItems()); } 

//SAVE protected void doPost(HttpServletRequest request, HttpServletResponse       response) throws ServletException, IOException  {  com.RiWA.Model.Item item = new com.RiWA.Model.Item();    response.getWriter().append(          item.saveItem(request.getParameter("txtItemName"),   request.getParameter("txtItemDesc"))); } 



//Convert QueryString to a Map private static Map getParasMap(HttpServletRequest request) {  Map<String, String> map = new HashMap<String, String>();       try  {   Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");            String queryString = scanner.hasNext() ?         scanner.useDelimiter("\\A").next() : "";       scanner.close();       String[] params = queryString.split("&");                for (String param : params)     {      String [] p=param.split("=");           map.put(p[0], p[1]);   }  }  catch(Exception e) {}     return map; } 

//UPDATE protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException  {    Map paras = getParasMap(request);  com.RiWA.Model.Item item = new com.RiWA.Model.Item();   

response.getWriter().append(item.updateItem(paras.get("hidItemID").toString (), paras.get("txtItemName").toString(),paras.get("txtItemDesc").toString())); }     //DELETE protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException  {      Map paras = getParasMap(request);      com.RiWA.Model.Item item = new com.RiWA.Model.Item();      response.getWriter().append(item.deleteItem(paras.get("itemID").toString())); } 

function pobierzDane(e) {
    e.preventDefault();
    ajax ("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", wrzucDaneDoHtml)
}
function wrzucDaneDoHtml(dane){
    var pUserId = document.createElement('p');
    var pUserName = document.createElement('p');
    var pUserUrl = document.createElement('p');
    var pUserIdContent = document.createTextNode("userId:"+dane.userId);
    var pUserNameContent = document.createTextNode("userName:"+dane.userName);
    var pUserUrlContent = document.createTextNode("userUrl:"+dane.userURL);

    pUserId.appendChild(pUserIdContent);
    pUserName.appendChild(pUserNameContent);
    pUserUrl.appendChild(pUserUrlContent);
    
    document.body.appendChild(pUserId);
    document.body.appendChild(pUserName);
    document.body.appendChild(pUserUrl);

}

//definicja funkcji ajax
function ajax (method, url, callback){
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open(method, url);
    
var button = document.getElementById('button');



httpRequest.onreadystatechange = function (){
        if(httpRequest.readyState == 4){
            if(httpRequest.status == 200){
                var returnData = httpRequest.responseText;
                returnData.userId
                var jsonObj = JSON.parse(returnData);
                jsonObj.userId
                callback(jsonObj);
                
                
                httpReqest = null; 
            }
            
            }
        }        
    
  
    httpRequest.send();
}
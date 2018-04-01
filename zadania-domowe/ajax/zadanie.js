function pobierzDane(e) {
    e.preventDefault();
    ajax ("GET", "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", wrzucDaneDoHtml)
}
function wrzucDaneDoHtml(dane){
    var pImie = document.createElement('p');
    var pNazwisko = document.createElement('p');
    var pZawod = document.createElement('p');
    var pFirma = document.createElement('p');
    var pImieContent = document.createTextNode("Imie:"+dane.imie);
    var pNazwiskoContent = document.createTextNode("Nazwisko:"+dane.nazwisko);
    var pZawodContent = document.createTextNode("Zawod:"+dane.zawod);
    var pFirmaContent = document.createTextNode("Firma:"+dane.firma);

    pImie.appendChild(pImieContent);
    pNazwisko.appendChild(pNazwiskoContent);
    pZawod.appendChild(pZawodContent);
    pFirma.appendChild(pFirmaContent);
    
    
    document.body.appendChild(pImie);
    document.body.appendChild(pNazwisko);
    document.body.appendChild(pZawod);
    document.body.appendChild(pFirma);

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
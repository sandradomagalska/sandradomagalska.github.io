//pobieram istniejący węzeł o id output
var istniejacyWezel =document.getElementById("output");

//sprawdzam czy udało się pobrać
//console.log(istniejacyWezel);

//tworzę nowy element html
var newElement = document.createElement("p");

//towrzę treść paragrafu
var newElementContent = document.createTextNode("Tutaj tworzę treść paragafu, o!");

//wstawiam nowoutworzoy tekst do nowoutworzonego paragrafu
newElement.appendChild(newElementContent);


//dodaję do paragrafu atrybut class='textpar'
newElement.setAttribute('class', 'textpar');

//console.log(newElement);

//wstawiam nasz przygotwany paragraf do div#output
istniejacyWezel.appendChild(newElement);

//usuwanie elementów z dokumentu
//istniejacyWezel.parentElement.removeChild(istniejacyWezel);
//lub
//document.getElementById("parFirst").removeChild(istniejacyWezel);

//insertBefore
var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement("br");
link.parentElement.insertBefore(br,link.nextElementSibling);

//usuwanie artybutów
link.removeAttribute('class');



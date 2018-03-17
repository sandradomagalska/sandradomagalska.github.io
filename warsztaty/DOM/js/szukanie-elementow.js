// pobranie elementu po id - tylko jede element

// parametr e getElemntById bez #
var parFirst = document.getElementById("parFirst");
//console.log(parFirst); 



//pobranie elementu po klasie - kolekcja elementów

//parametr w getElementsByClassName bez.
var elementLink = document.getElementsByClassName("link");
//console.log (elementLink);
//console.log(elementLink.length);



//pobranie elementów po tagu 

var elementTag= document.getElementsByTagName("p");
//console.log(elementTag);



//pobranie wszystkich elementów po selektorze .superlink - tutaj nizbędne jest podanie selektora klasy, jeśli pobieram klasy lub id jeśli pobieramy id

var elementSuperlink = document.querySelectorAll(".superlink");
//console.log(elementSuperlink);



//pobranie pojedynczego elementu po selektorze id

var parSecond = document.querySelector("#parSecond");
//console.log(parSecond);

var mojeLinki= document.querySelectorAll("link");
//console.log(mojeLinki[1]);

//for (var i=0; i<mojeLinki.length; i++){
//    console.log("To mój link nr "+ (i + 1) );
//    console.log(mojeLinki[i]);
//    console.log("--------------------");
//}


// pętla forEach działa na kolekcji pobranej za pomocą metody document.querySelectorAll()

mojeLinki.forEach(function(element,index,){
    console.log(element);
});































function oblicz(){
    var wplata = parseInt(document.getElementById ("wplata").value);
    var okresKapitalizacji = parseInt(document.getElementById ("okres-kapitalizacji").value);
    var iloscLat = parseInt(document.getElementById ("ilosc-lat").value);
    var oprocentowanie = parseInt(document.getElementById ("oprocentowanie").value)/100;
    var podatek = (document.getElementById ("podatek").checked); 
    
    var wynik=obliczZysk(wplata,iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    document.getElementById("wynik").innerHTML= wynik;
}

function obliczZysk (wplata, okresKapitalizacji, iloscLat, oprocentowanie,podatek){
    var kapital;
    var oprocentowanieOpodatkowane;
    
    oprocentowanieOpodatkowane = podatek ? oprocentowanie *0.81 : oprocentowanie;

// to samo co wers wyżej w wersji skróconej
//    if(podatek){
//        var oprocentowanieOpodatkowane = oprocentowanie * 0.81;
//    }else{
//        var oprocentowanieOpodatkowane = oprocentowanie;
//    }
    
    kapital=wplata*Math.pow((1+(oprocentowanieOpodatkowane/okresKapitalizacji)), iloscLat*okresKapitalizacji);
    return kapital.toFixed(2);
}

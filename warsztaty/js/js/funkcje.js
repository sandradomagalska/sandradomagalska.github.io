// funkacja bez parametrów
function wyswietlWKonsoli(){
    console.log("Adam Nowacki");
}
wyswietlWKonsoli();
// fukcja z paramerami
function wyswietlWKonsoliParam(imie, nazwisko) {
    console.log (imie+ " " + nazwisko);
}
wyswietlWKonsoliParam("Adam", "Nowacki");
wyswietlWKonsoliParam("Katarzyna", "Izak");
wyswietlWKonsoliParam("Kinga", "Korycka");
wyswietlWKonsoliParam("Adrian", "Bąk");

// zwracanie wartości przez fuknkcję
function obliczPodatek( kwota, procentPodatek ){
    var wynik= kwota * (procentPodatek /100 );
    return wynik.toFixed(2);
}

function wyswietlWyniki(wartosc){
    document.write(wartosc);
    
}

var obliczenia = obliczPodatek (1000,10);
wyswietlWynik( obliczenia );

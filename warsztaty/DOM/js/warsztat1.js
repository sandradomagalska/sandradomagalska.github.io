function pobierzImie(event){
    event.preventDefault();
    var inputs= document.getElementsByTagName("input");
    var imie = inputs[0].value;
    var nazwisko = inputs[0].value;
    console.log("Imie: "+ imie + "\nNazwisko: "+ nazwisko);
}

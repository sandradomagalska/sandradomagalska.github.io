class Ksiazka {
    constructor( tytul, autor, przeczytana ){
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;
    }  
    
    opiszKsiazke() {
        console.log( "Książka ma tytuł: " + this.tytul + " " + ", autorem jest " + this.autor + ""
                   + " i została " + this.przeczytana);                  
    }
}
var ksiazka = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", "przeczytana");
ksiazka.opiszKsiazke();

var potop = new Ksiazka('Potop', 'Henryk Sienkiewicz', 'nieprzeczytana');
var zbrodnia = new Ksiazka('Zbrodnia i kara', 'Fiodor Dostojewski', 'przeczytana')
var wiezien = new Ksiazka('Więzień nieba', 'Carlos Ruiz Zafón', 'nieprzeczytana')

var ksiazki = ["Wiedźmin","Potop","Zbrodnia i kara", "Wiezień nieba"];

console.log (ksiazki);

function iloscPrzeczytanych ( ){
    
    if(liczba < 0){

  document.write("Wartość zmiennej liczba jest mniejsza od 0.");

}

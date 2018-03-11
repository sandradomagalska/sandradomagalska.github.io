var imiona = ["Adam","Marta","Paweł", "Michał","Kasia", "Sandra"];
//console.log (imiona [0], imiona [3]);

//dodawanie elementów do tablicy - na końcu
imiona[6]="Mikołaj";
imiona[7]="Kinga";
imiona.push ("Kamil", "Krzysztof", "Anna");
imiona.push("Marcin");

//usuwanie elementów tablicy z końca
imiona.pop();
imiona.pop();


//dodawanie elementów tablicy na początku 
imiona.unshift("Sebastian");
imiona.unshift("Małgosia");

//usuwanie elementów z począrku tablicy 
imiona.shift();

//sprawdzanie "długości" tablicy
var iloscElementowTablicy = imiona.length;

//console.log (iloscElementowTablicy);
//console.log (imiona);

//var textZTablicy =imiona[0] + "," +imiona [1] + "," + imiona [2];
//console.log(textZTablicy);

//rozbijanie tablicy na ciąg tekstowy
var elementyTablicyString =imiona.join(",----, ");
console.log(elementyTablicyString);

//"odwrócenie tablicy"
//imiona.reverse();
//console.log( imiona);

//sortowanie tablicy
//imiona.sort();
//console.log(imiona);

//sprawdzanie czy wartość w tablicy istnieje
console.log(imiona.indexOf ("Sandra"));








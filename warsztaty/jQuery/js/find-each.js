//metoda find wyszukuje potomków selektora. W poniższym przykładzie poszuka parafragów znajdujących się w div.
// metoda find może wyszukiwać po tagu, klasie, id, atrybucie

$("div").find("p").css({fontSize:"60px", color:"deeppink"});

//metoda each - jako parematr przyjmuje funkcję zwrotną, która zostanie wykonana na każdym znalezionym elemencie
$("p").each(function(index,element) {
   console.log(index, element);
    $(this).addClass('new class').css({fontSize:"40px", backgroundColor:"yellow"});
});

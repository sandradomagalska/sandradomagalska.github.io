$(function(){
   
    // pobieranie tekstu 
    var textParagrafuId = $("#paragraf").text();
//    console.log(textParagrafuId);
    
    // ustawienie tekstu
    $("#paragraf").text("Nowy tekst ustawiony metodą text()");
    
    //dodawanie html
    $(".paragrafnext").html("<strong>Tutaj nowa treść HTML</strong>");
    
    //dodawanie treści na końcu selektora
    $(".paragrafnext").append("<br>Nowa treść na końcu selektora");
    
    //dodawanie treści za selektorem
    $(".paragrafnext") .after("<h6>Nowy element za selektorem</h6>");
    
    //usuwanie elementu wraz z zawartością
    $(".paragrafnext") .remove();
    
    //usuwanie tylko zawartości
    $("div").empty();
    
    //dodawanie pojedynczego stylu css
//    $("div").css("background-color","red")
    
     //dodawanie wielu styli css
    $("div").css({
        width: "600px",
        height: "120px",
        backgroundColor: "lime"
    });
    
    //dodawanie klasy
    $("h1").addClass("nowa_klasa");
    
    //dodawanie atrybutów
     $("h1").attr("title", "Główny tytuł ustawiony za pomocą jQuery");
    
    
    
    
    
    
    
    
    
    
    
    
    
});
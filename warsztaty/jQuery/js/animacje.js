var btn = $("#animate");
btn.on("click", function(){
    
//   $("h1").hide(4000).show("fast"); 
//    $("h1").fadeOut(3000).fadeIn("slow");
//    $("h1").slideUp(3000).slideDown(600);

    $("h1").animate(
    {'left': '100px', 'top':'100px'},
    4000,
    function(){
        alert("Koniec animacji");
        
    }
    );
    
});
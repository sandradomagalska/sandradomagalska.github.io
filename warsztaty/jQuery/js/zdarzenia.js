$(function(){
   
    $( ".mylink" ).on( "click", function(event) {
        event.preventDefault();
        $("body").css({backgroundColor: "green"});
       
});
    
    //podpiecie kilku zdarzeń
    $("h1").on({
        "mouseenter":function(){
            $(this).css({textDecoration : "underline"});
        }, 
        "mouseleave": function(){
            $(this).css({textDecoration:"none"});
        }
    });
    
});
var parFirst=document.getElementById("parFirst");

//pobieram rodzica dla elementu #parFirst za pomocą właściwości parentElement
//console.log(parFirst.parentElement);



//cildNodes pobiera wszystkie węzły w tym także białe znaki międz elementami jako "text" oraz komentarze
//console.log(parFirst.childNodes);

//children pobiera tylko te węzły które są elementem html
//console.log(parFirst.children);


//pobieram pierwsze dziecko elementu #parFirst
//var pierwszeDziecko = parFirst.children[0];

//pobieram następny węzeł dla pierwszeDziecko który jest elementem w relacji rodzeństwo
//console.log(pierwszeDziecko.nextElementSibling);

//pobieram następny węzeł dla pierwszegDziecko niezależnie czy jest elementem html, textem czy komentarzem
//console.log(pierwszeDziecko.nextElementSibling);

//lastChild pobiera ostatnie dziecko nizależnie czy jest elementem html, textem czy komentarzem 
//var ostatnieDziecko = parFirst.lastChild;

//lastElementChild pobiera ostatnie dziecko które jest elementem html
//var ostatnieDziecko = parFirst.lastElementChild;
//console.log(ostatnieDziecko);
//console.log(ostatnieDziecko.previousElementSibling);

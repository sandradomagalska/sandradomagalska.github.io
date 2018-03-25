function endScrollHandle(onscroll) {
    e.preventDefault();
    
$.getJSON("https://jsonplaceholder.typicode.com/users", wrzucDaneDoHtml)
  
}

var waiting = false, endScrollHandle;

$(window).on( 'scroll' , function() {
    if (waiting) {
        return;
    }
    waiting = true;
    clearTimeout(endScrollHandle);

    console.log('Scrolowanie');

    setTimeout(function () {
        waiting = false;
    }, 100);

    endScrollHandle = setTimeout(function () {
        console.log('Scrolowanie');
    }, 200);
});
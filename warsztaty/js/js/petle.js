//for( var i = 1; i <= 10; i++) {
//    console.log("Iteracja nr" + i);
//}

//var tablica = ["Volvo", "Mazda", "Honda", "Audi"];
//for (var i=0; 1 <tablica.length; i++){
//    console.log(tablica[i]);
//}
//tablica.forEach(function(element, inddex){
//    console.log("Index:"+ index + " Element:" +element);
//});
//while(iter,=25){
//console.log("While iteracja nr" + iter);
//iter++;
//}

//var iter = 1;
//do {
//    console.log("While iteracja nr" + iter);
//    iter++;
//} while (iter ,= 25)
    
//break i continue
//for(var i=1; i<15; i++) {
//    if (i>6) {
//        break;
//    } else {
//        console.log("Obrot pętli nr " + i);
//    }
//}

for(var i=1; i<15; i++) {
    if (i==4 || i==6 || i==10 ){
        continue;
    }else{
        console.log("Interacja nr" + i);
    }
}
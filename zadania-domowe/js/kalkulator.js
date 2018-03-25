var licz;

function getValueOnPress(elementValue){
    document.getElementById('count').value += elementValue ;
    
}

function getExp(event) {
    event.preventDefault();
    expression = document.getElementById('count').value;
    calculate(expression);
}

function showResult(res) {
    var p = document.createElement('p');
    p.innerHTML = res;
    document.getElementById('kontener').appendChild(p);
}


function calculate(exp) {
    var pattern = /[a-zA-Z]/;
    var result;
    try {
        if (pattern.test(exp)) throw new Error(expression + "ERROR");
        else {
            result = eval(exp);
            if (result === Infinity || result === -Infinity ) throw new Error(expression + "ERROR 0!")
            document.getElementById('count').value = result ;
          
        }
    } catch (e) {
      document.getElementById('count').value = e.message ;
        showResult(e.message);
    }
}

function clearField(event){
    document.getElementById('count').value = " ";
}
var button = document.getElementsByClassName("bt")
var display = document.getElementsByClassName("display")
[0] //if got an error for trim()
// display.textContent = 0;
var operand1 = 0;
var operand2 = null;
var operator = null;
function isOperator(value){
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value'); //this is taking values if it is operator or operand
        var text = display.textContent.trim(); //this is showing text on display to be used in parse float
    if(isOperator(value)){
        operator = value;
        operand1 = parseFloat(text);
        display.textContent="";
    }
    else if(value == "%"){
        operand1 = parseFloat(text);
        operand1 /= 100;
        display.textContent = operand1;
    }
    else if(value =="ac"){
        display.textContent="";
    }
    else if(value == "sign"){
        operand1 = parseFloat(text);
        operand1 = -1 * operand1;
        display.textContent = operand1;
    }
    else if(value == "."){
        if(text.length && !text.includes('.')){
            display.textContent = text + '.';
        }
    }
    else if ( value == "="){
       
        console.log("presssed");
        operand2 = parseFloat(text);
        var result = eval(operand1 + operator + operand2);
        console.log(result);
        if(result){
            display.textContent = result;
            operand1 = result;
            operand2 = null;
            operator = null;
        }
        // if(operand1 == operand2 && operator =='-'){
        //     display.textContent = '0';
        //     operand1 = result;
        //     operand2 = null;
        //     operator = null;
        // }
    }
    else{
        display.textContent += value;
    }
});
}
//perdi para usuario gigitar umm nùmero
var number1 = prompt("digite primmeiro número");
number1 = parseFloat(number1)

var number2 = prompt("digite sengundo número");
number2 = parseFloat(number2);

var media = (number1 + number2) / 2;
var modulo = (number1 + number2) % 2;
var divisao = (number1 / number2) ;
var multiplicacao = (number1 * number2) ;
var subitracao = (number1 - number2);
number1++;
number2--;

alert("A media de  " + number1 + " + " + number2 + " : " + media);


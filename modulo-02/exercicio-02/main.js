//pedir para o usuario digitar um numero
var number1 = prompt("Digite uma Numero");

//converter em numero inteiro
number1 = parseInt(number1);

//pedir para o usuario digitar outro numero
var number2 = prompt("Digite o sengndo Numero");

//converter em numero inteiro
number2 = parseInt(number2);

/*
mostrar num alert o seguinte texto
o resto da divisão de (n1) por (n2) é: (resultado); 
*/
var divisao = number1 % number2;
alert("o resto da divisão de "+ number1+ " por " + number2 + " é: " + divisao);

/*
mostrar num alert o seguinte texto
o numero (n1) elevado a (n2) é: (resultado); 
*/
var elevado = number1 ** number2;
alert("U numero "+ number1+ " elevado a " + number2 + " é: " + elevado);
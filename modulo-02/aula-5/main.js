// Operadores de Comparação
// 	* 
// ==  Igualdade(valor)
// 	* 
// !=  Diferente(valor)
// 	* 
// === Igualdade(valor e tipo)
// 	* 
// !== Diferente(valor e tipo)
// 	* 
//   > Maior
// 	* 
//  >= Maior ou igual
// 	* 
//   < Menor
// 	* 
//  <= Menor ou igual


var number1 = prompt("digite primmeiro número");
number1 = parseFloat(number1)

var number2 = parseFloat(prompt("digite sengundo número"));

var result = (number1 + number2) / 2;


if (result >= 5) {
    alert("Sua media é " + result + " Parabens voce passou :)")
} else{
    alert("Sua media é " + result + " Voce foi reprovado :(")
}


// Operadores de Comparação

var number1 = prompt("digite primmeiro nota");
number1 = parseFloat(number1)

var number2 = parseFloat(prompt("digite sengundo nota"));

var media = (number1 + number2) / 2;


if (number1 > 0 && number2 > 0 && media >= 5) {
    alert("Sua media é " + media + " Parabens voce passou :)")
} else{
    alert("Sua media é " + media + " Voce foi reprovado :(")
}


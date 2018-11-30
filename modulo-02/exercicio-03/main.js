//fazer jogador1 digitar um numero
var number1 = parseInt(prompt("jogador 1 digite um número: "));

//fazer jogador2 digitar outro numero
var number2 = parseInt(prompt("jogador 2 digite um número: "));

//se forem iguais, mostrar mensagem 'empate'
if (number1 === number2) {
    alert("Deu empate")
} 
var sorteio = parseInt(Math.random() * 2);

// se o numero sorteado for 0, ganha quem escolher o numero MENOR
if (sorteio == 0) {
    if (number1 < number2) {
        alert("jogador 1  " + number1 + " ganhou ");
    } else {
        alert("jogador 2  " + number2 + " ganhou  ");
    }
//se o numero sorteado for 1, ganha quem escolher o numero MAIOR
} else if (sorteio == 1) {
    if (number1 > number2) {
        alert("jogador 1  " + number1 + " ganhou  ");
    } else {
        alert("jogador 2  " + number2 + " ganhou  ");
    }
}
//sortear um numero entre 0 e 1


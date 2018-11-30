// Operadores de Comparação

var number1 = prompt("digite um úmero de 1 a 2");
number1 = parseFloat(number1);
var number2 = prompt("digite um úmero de 1 a 2");
number2 = parseFloat(number2);

var sorteio = parseInt(Math.random(1) * 2);

alert(sorteio);

switch (sorteio) {
    case 0:
        alert("acertou mane o numero é" + sorteio);
        break;

    case 1:
        alert("acertou mane o numero é" + sorteio);
        break;

    default:
        alert('Ninguem ganhou ou perdeu todos ganharam ;)');
        break;
}
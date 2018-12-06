//pergunta o numero o número para usuário
var number1 = prompt('Digite um numero: ');
// converter o numero
number1 = parseInt(number1);
escrever();

function escrever() {
    var output = document.querySelector('#output');
    output.innerHTML = number1;
}


function mostrarSoma() {
    var number2 = prompt('Digite um numero: ');

    number2 = parseInt(number2);
    number1 = number1 + number2;
    escrever();
}

function mostrarSubitracao() {
    // pergnta o segundo número para usuário
    var number2 = prompt('Digite um numero: ');
    // converter o numero
    number2 = parseInt(number2);

    //então concatena na varieavel result
    number1 = number1 = number2;

    escrever();
}

function mostrarMultiplicacao() {
    // pergnta o segundo número para usuário
    var number2 = prompt('Digite um numero: ');
    // converter o numero
    number2 = parseInt(number2);

    //então concatena na varieavel result
    number1 = number1 * number2;

    escrever();
}

function mostrarDivisao() {
    // pergnta o segundo número para usuário
    var number2 = prompt('Digite um numero: ');
    // converter o numero
    number2 = parseInt(number2);

    //então concatena na varieavel result
    number1 = number1 / number2;

    escrever();
}


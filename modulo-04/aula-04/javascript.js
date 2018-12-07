//pergunta o numero o número para usuário
var number1 = prompt('Digite um numero: ');
// converter o numero
number1 = parseInt(number1);
escrever(number1);

function inicializandoCalculo(calc) {
    var number1 = parseInt(document.querySelector('#output').textContent);

    var number2 = parseInt(prompt('Digite outro numero: '));
    

    var msg = calcular(calc, number1, number2);
    escrever(msg);
}

function escrever(mensagem) {
    var output = document.querySelector('#output');
    output.innerHTML = mensagem;
}


function calcular(calc, number1, number2) {
    var numeroCalculado = null;
    switch (calc) {
        case '+':
            numeroCalculado = number1 + number2;
            break;

        case '-':
            numeroCalculado = number1 - number2;
            break;

        case '*':
            numeroCalculado = number1 * number2;
            break;

        case '/':
            numeroCalculado = number1 / number2;
            break;

        default:
            alert('Operação Invalida :(');
            break;
    }
    return numeroCalculado;

}
//pergunta o numero o número para usuário
var number1 = prompt('Digite um numero: ');
// converter o numero
number1 = parseInt(number1);
escrever();

function escrever() {
    var output = document.querySelector('#output');
    output.innerHTML = number1;
}


function calcular(calc) {

    var number2 = prompt('Digite outro numero: ');
    number2 = parseInt(number2);

    switch (calc) {
        case '+':
            number1 = number1 + number2;
            break;

        case '-':
            number1 = number1 - number2;
            break;

        case '*':
            number1 = number1 * number2;
            break;

        case '/':
            number1 = number1 / number2;
            break;

        default:
            alert('Operação Invalida :(');
            break;
    }
    escrever();

}
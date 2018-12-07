//pergunta o numero o número para usuário
var number1 = prompt('Digite um numero: ');
// converter o numero
number1 = parseInt(number1);
escrever(number1);

function inicializandoCalculo(calc) {
    var number1 = parseInt(document.querySelector('#output').textContent);

    var number2 = parseInt(prompt('Digite outro numero: '));
    
    try {
        var msg = calcular(calc, number1, number2);
    } catch (error) {
        console.log(error);
        return;
    }
    
    escrever(msg);
}

function escrever(mensagem) {
    var output = document.querySelector('#output');
    output.innerHTML = mensagem;
}


function calcular(calc, number1, number2) {

    if (sibolo !== '+' && simbolo !== "-" && simbolo !== '*' || simbolo !== '/') {
         throw new Error('Chama passada somente numerico');
    }
    if (isNaN(number1) || isNaN(number2)) {
        throw new Error('Chama passada somente numerico');
    }
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
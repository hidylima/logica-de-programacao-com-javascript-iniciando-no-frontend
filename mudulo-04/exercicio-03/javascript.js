let n1 = parseFloat(prompt('Digite o número: '));

escreve(n1);

function escreve(mensagem) {
    let output = document.querySelector("#output");
    output.innerHTML = mensagem;
}

function iniciarCalcular(simbolo) {
    let n1 = parseFloat(document.querySelector('#output').textContent)

    let n2 = parseFloat(prompt('Digite outro número: '));

    let mensagem = calculo(simbolo, n1, n2);

    escreve(mensagem);

}

function calculo(simbolo, n1, n2) {
    let recebeNumero = null;
    switch (simbolo) {
        case '+':
            recebeNumero = n1 + n2;
            break;

        case '-':
            recebeNumero = n1 - n2;
            break;

        case '*':
            recebeNumero = n1 * n2;
            break;

        case '/':
            recebeNumero = n1 / n2;
            break;

        default:
            alert('informação invalisa :(');
            break;
    }
alert(recebeNumero)
    return recebeNumero;
}
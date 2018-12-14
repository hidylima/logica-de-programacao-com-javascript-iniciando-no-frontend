var n1 = "0";
var operacao = null;
var n2 = "";

function incluirDigito(digito) {

    if (operacao !== null) {
        n2 += digito;
        mostrarNoDisplay(n2);
    } else {
        if (n1 === "0") {
            n1 = digito;
        } else {
            n1 += digito;
        }

        mostrarNoDisplay(n1);
    }
}

var clicadoEmIgual = false;

function finalizarCalculo() {
    clicadoEmIgual = true;
    var resultado = calcular();
    n1 = resultado;
    mostrarNoDisplay(n1);
}

function calcular() {
    var nCalculado = 0;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    switch (operacao) {
        case "+":
            nCalculado = n1 + n2;
            break;
        case "-":
            nCalculado = n1 - n2;
            break;
        case "*":
            nCalculado = n1 * n2;
            break;
        case "/":
            nCalculado = n1 / n2;
            break;
        case "%":
            nCalculado = n1 % n2;
            break;

        default:
            document.querySelector("#display").innerHTML = 'Error';
            break;
    }
    return nCalculado;
}

function iniciarCalculo(simbolo) {
    if (clicadoEmIgual) {
        clicadoEmIgual = false;
        n2 = "";
    }

    if (operacao === null || n2 === "") {
        operacao = simbolo;
    } else {
        var resultado = calcular();
        n1 = resultado;
        operacao = simbolo;
        mostrarNoDisplay(n1);
    }
}

function incluirPonto() {
    if (operacao && n1 === "") {
        n2 = "0."
    } else if (operacao && n2) {
        n2 = "."
    } else {
        n1 = "."
    }
}

function limpar() {
    n1 = "0";
    operacao = null;
    n2 = "";
    mostrarNoDisplay(n1);
}

function obterPorcento() {
    if (!n2) {
        n2 = "";
        mostrarNoDisplay(n1);
    } else {
        var valorPorcento = parseFloat((n1 * n2) / 100);
        n2 = valorPorcento;
        mostrarNoDisplay(n2);
    }

}

function mostrarNoDisplay(valor) {
    document.querySelector("#display").innerHTML = valor;
}
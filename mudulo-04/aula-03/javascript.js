var largura = parseFloat(prompt('digite a largura'));
var altura = parseFloat(prompt('digite a altura'));

function mostrarAreaAlert() {
    var area = clacularArea(largura, altura)
    alert('a área total é: ' + area);
}

function mostrarAreaOutput() {
    var area = clacularArea(largura, altura)

    document.querySelector('#output').innerHTML = 'a área total é: ' + area;
}

function clacularArea(largura, altura) {
    return largura * altura;
}
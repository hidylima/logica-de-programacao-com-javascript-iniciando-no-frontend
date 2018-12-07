var largura = parseFloat(prompt('digite a largura'));
var altura = parseFloat(prompt('digite a altura'));

function mostrarAreaAlert() {
    try {
        var area = clacularArea(largura, altura)
    } catch (error) {
        console.log(error)
        return;
    }
    alert('a área total é: ' + area);
}

function mostrarAreaOutput() {
    try {
        var area = clacularArea(largura, altura)
    } catch (error) {
        console.log(error)
        return;
    }

    document.querySelector('#output').innerHTML = 'a área total é: ' + area;
}

function clacularArea(largura, altura) {
    if(isNaN(largura) || isNaN(altura)){
        throw new Error('Involte um número valido');
    }
    return largura * altura;
}
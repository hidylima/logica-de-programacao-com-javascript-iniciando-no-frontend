var output = document.querySelector('#output');
var mensagem = '';

function mostrarTabuada(){
    // perfutar o numero para usuario
    var number1 = prompt('Digite um numero: ');
    limparTabuada()
    // converter o numero
    number1 = parseInt(number1);
    // criar uma variavel que servira de incice 
    var indice = 0;
    // enquanto indece for <= 1001 
    while(indice <= 1001){
        //entáo concatena na varieavel mensagem
        mensagem += number1 + ' x ' + indice + ': ' + (number1 * indice) + '<br>';
        indice++;
    }
    // mostra mensagem no output
    output.innerHTML = mensagem;
}

function limparTabuada(){
    mensagem = '';
    output.innerHTML = mensagem;
}


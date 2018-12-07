var produtos = new Array('canea', 'bolsa', 'estojo', 'lapis')

var output = document.querySelector('#output');

var mensagem = '';
for (let index = 0; index < produtos.length; index++) {
    mensagem += 'Produtos ' + (i + 1) + ': ' + array[index] + '<br>';
}

output.innerHTML = mensagem;
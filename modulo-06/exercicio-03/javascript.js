var produto = new Object()
produto.nome = "caneta";
produto.preco = 2.22;
produto.estoque = 10;
var msg = "";

msg += 'nome: ' + produto.nome + "<br>";
msg += 'preço: ' + produto.preco + "<br>";
msg += 'estoque: ' + produto.estoque + "<br>";
produto.comprar = function comprar(){
    console.log("obrigado pela compra volte sempre!");
}

document.querySelector('#app').innerHTML = msg;
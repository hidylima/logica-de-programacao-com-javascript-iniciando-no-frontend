// var nomes = [ "maria", "joão"];
// var produto ={
//     nome: "caneta",
//     preco: "preco"
// }
// var produto1 = [ produto, { nome: "caneta", preco: "preco" } ]/



var produtos = [{
        "nome": "caneta",
        "preco": 12
    },
    {
        "nome": "lapis",
        "preco": 15
    }
];
var msg = "";

for (var index = 0; index < produtos.length; index++) {
    msg += "<h2> Produsto: " + produtos[index].nome + "</h2>"
    msg += "<p> Preço: " + produtos[index].preco + "</p>";
    
}
console.log(msg)
document.querySelector( "#app").innerHTML = msg;
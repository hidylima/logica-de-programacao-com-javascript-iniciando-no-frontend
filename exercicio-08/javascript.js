var sorteados = obterResultados();
var display = document.querySelector("#display");
var msg = '';
msg += "<p> numeros sorteados: </p>";
msg += "<p> " + sorteados.join( " - ") + "</p>"

var aposta = [3, 60, 5, 12, 46, 1];

for(var i = 0; i < aposta.length; i++){

    msg += '<p>' + aposta[i] + ": ";

    msg += (sorteados.indexOf(aposta[i]) === -1) ? "Errou cara kkk" : "Acertou cara; kkk" ;
    
    msg += "</p>";
}
display.innerHTML = msg;
// for (let index = 0; index < 6; index++) {
//     sotertado[index] = sortear();

// }
function obterResultados() {
    var sorteados = [];
    while (sorteados.length < 6) {
        var sorteado = sortear();
        if(sorteados.indexOf(sorteado) === -1){
            sorteados[sorteados.length] = sorteado;
        }
    }
    return sorteados;
}
function sortear() {
    return Math.floor(Math.random() * 60);
}
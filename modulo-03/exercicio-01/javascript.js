var numero = parseFloat(prompt('Digite um número: '));



// for (var j = 1; j <= 50; j--) {
//     for (var cont = 0; cont <= 10; cont++) {
//         document.write(numero + ' x ' + j + ' = Número ' + (numero * j++) + '<br>');
// document.write('<hr>');

//     }
//     


// }

var nummero = prompt('');
nummero = parseFloat(nummero);
var indice = 0;

while (indice <= 50) {
    document.write(nummero + ' x ' + indice + '  = nummero ' + (nummero * indice) + '<br>');
    
    if (indice % 10 === 0 && indice > 0) {
        document.write('<hr>');
    }
    indice++;
}
document.write('Saiu do loop')
var nummero = prompt('');
nummero = parseFloat(nummero);
var indice = 1;

do {
    document.write(nummero +' x ' + indice + '  = nummero ' + (nummero * indice)+'<br>');
    indice++;
}while (indice <= 10)
document.write('Saiu do loop')


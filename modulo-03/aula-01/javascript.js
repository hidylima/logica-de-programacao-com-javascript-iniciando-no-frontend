var nummero = prompt('');
nummero = parseFloat(nummero);
var indice = 1;

while (indice <= 10) {
    document.write(nummero +' x ' + indice + '  = nummero ' + (nummero * indice)+'<br>');
    indice++;
}
document.write('Saiu do loop')

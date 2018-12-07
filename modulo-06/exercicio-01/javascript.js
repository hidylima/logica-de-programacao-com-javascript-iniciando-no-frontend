var dias = new Array('domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta');
var hoje = new Date();
var diaSemana = hoje.getDay(); //retorna o dia da diaSemana;

alert('Bem vindo, hojé é ' + dias[diaSemana]);

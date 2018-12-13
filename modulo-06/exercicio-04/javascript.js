var usuario = [{
        "nome": "Luiz Carlos",
        "email": "exemplo@.com.br"
    },
    {
        "nome": "Thinara Lima",
        "email": "exemplo@.com.br"
    },
    {
        "nome": "Bruna Lima",
        "email": "exemplo@.com.br"
    }
];
var msg = "";

for (var i = 0; i < usuario.length; i++) {
    msg += '<h1> Dados dos usuarios </h1> <br>' ;
    msg += 'nome: ' + usuario[i].nome + "<br>";
    msg += 'email: ' + usuario[i].email + "<br>";

}

document.querySelector('#app').innerHTML = msg;
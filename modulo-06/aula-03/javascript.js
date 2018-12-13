var pessoa = new Object();

pessoa.nome = "Luiz Carlos ";
pessoa.sobrenome = "Balisa Lima";
pessoa.idade = 28;
pessoa.peso = 68.55;

var msg = "";

msg += "Seja bem vindo! " + pessoa.nome + " " + pessoa.sobrenome + "<br>";
msg += "Você tem " + pessoa.idade + " anos <br>" ;
msg += "Seu peso é " + pessoa.peso + "<br>";

document.querySelector("#app").innerHTML = msg;


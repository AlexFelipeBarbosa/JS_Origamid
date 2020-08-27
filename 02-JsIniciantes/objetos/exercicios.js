console.log(" ");
console.log("Exercicios");
console.log(" ");

/* Crie um objeto com seus dados pessoais.
  Deve possuir pelo menos duas propriedades (nome e sobrenome)
*/
var aluno = {
  nome: "Alex",
  idade: 38,
  sobrenome: "Barbosa",
  cidade: "Batatais",
  estado: "São Paulo",
  curso: "Desenvolvimento Web",
};
console.log(aluno);

// Crie um metodo no objeto anterior que mostre o seu nome completo
aluno.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(aluno.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
console.log(carro);
carro.preco = 3000;
console.log(carro);

/* Crie um objeto de um cachorro que represente um labrador
preto com 10 anos, que late ao ver um homem.
*/
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "nada";
    }
  },
};
console.log(cachorro);
console.log(cachorro.latir());
console.log(cachorro.latir("homem"));

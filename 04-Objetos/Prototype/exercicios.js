console.log("   ");
console.log("Exercicios -----------------------");
console.log(" ");

/* Crie uma função construtora de Pessoas
Deve conter nome, sobrenome e idade
Crie um metodo no protótipo que retorne 
o nome completo da pessoa.
*/
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const usuario = new Pessoa("Alex", "Barbosa", 38);

/* Liste os métodos acessados por dados criados com 
NodeList, HTMLCollection, Document
*/
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os contrutores dos dados abaixo.
const li = document.querySelector("li");
li; // HTMLElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual contrutor do dado abaixo:
li.hidden.constructor.name; // String

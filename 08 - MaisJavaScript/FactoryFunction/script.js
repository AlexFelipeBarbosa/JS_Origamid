/* Factory Function
São funções que retornam um objeto sem necessidade de utilizarmos a palavra chave new.
Possuem basicamente a mesma função que constructor functions / classes
*/
function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    element: element,
    text: text,
  };
}
const comprarBtn = createButton("Comprar");

console.log(comprarBtn);

/* Métodos / Variáveis Privadas
Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas.
*/
function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }

  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return {
    nome,
    sobrenome,
    andar,
    nadar,
  };
}
criarPessoa("Alex", "Barbosa");

/* Ice Factory
Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze()
*/
("use strict");
function criarPessoa2(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
  });
}

/* Constructor Function / Factory Function
Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new.
Também é possivel fazer isso com uma Constructor Function.
*/
function Pessoa(nome) {
  if (!(this instanceof Pessoa))
    // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const analista = Pessoa("Alex");
console.log(analista);

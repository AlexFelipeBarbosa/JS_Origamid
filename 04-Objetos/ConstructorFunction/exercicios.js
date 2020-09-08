console.log(" ");
console.log("Exercicios --------------------------------------");
console.log(" ");

// Transforme o objeto abaixo em uma Constructor Function
/*
const pessoa = {
  nome: "Nome da Pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};
*/
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(nome + " Andou");
  };
}

// Crie 3 pessoas: João 20 anos, Maria 25 anos, Bruno 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);
console.log(joao);
console.log(maria);
console.log(bruno);
console.log(joao.andar());
console.log(maria.andar());
console.log(bruno.andar());

/* Crie uma Constructor Function (Dom) para manipulação de listas de elementos do DOM.
Deve se conter as seguintes propriedades e métodos:
elements, retorna NodeList com os elementos selecionados 
addClass(classe), adiciona a classe a todos os elementos.
removeClass(classe), remove a classe a todos os elementos.
*/
function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const listaItens = new Dom("li");
const seletorUl = new Dom("ul");

listaItens.addClass("ativar");
seletorUl.addClass("ativar-ul");
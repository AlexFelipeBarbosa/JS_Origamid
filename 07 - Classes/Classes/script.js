/* Constructor Function
Funções responsaveis pela criação de objetos.
O conceito de uma função construtora de objetos é implementado em outras linguagens como classe.
*/

function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
};

const blueButton = new Button("Comprar", "blue");

console.log(blueButton.element());

/* Class
O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras.
Agora podemos utilizar a palavra chave class.
É considerada syntactical sugar, pois por baixo dos panos continua utilizando o sistema de protótipos de uma função construtora para criar a classe.
*/

class Button2 {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}

const blueButton2 = new Button2("Comprar", "blue");

console.log(blueButton2.element());

/* Constructor
O método constructor(args) {} é um método especial de uma classe.
Nele você irá definir todas as propriedades do objeto que será criado. 
Os argumentos passados em new, vão direto para o constructor.
*/

class Button3 {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
}

const blueButton3 = new Button3("Clique", "blue", "white");

console.log(blueButton3); // Button3 {text: "Clique", background: "blue", color: "white"}

/* Constructor Return
Por padrão a classe retorna this. Ou seja, this é o objeto criado com o new Class.
Podemos modificar isso alterando o return do constructor, o problema é que perderá toda referecia do objeto.
*/
class Button4 {
  constructor(text) {
    this.text = text;
    return this.element(); // não fazer
  }
  element() {
    document.createElement("button").innerText = this.text;
  }
}
const btn = new Button4("Clique");

console.log(btn); // Button4 {text: "Clique"}

/* This
Assim como em uma função construtora. this faz referencia ao objeto criado com new.
Você pode acessar as propriedades e métodos da classe utilizando o this.
*/
class Button5 {
  constructor(text) {
    this.text = text;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  appendElementTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
  }
}

const blueButton5 = new Button5("Clique");
blueButton5.appendElementTo("body");

/* Static vs Prototype
Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma.
Porem podemo criar métodos diretamente na classe utilizando a palavra chave static.
Assim como [].map é um método de um array e Array.from() é um método do construtor de Array.
*/
class Button6 {
  constructor(text) {
    this.text = text;
  }
  static create(background) {
    const elementButton = document.createElement("button");
    elementButton.style.background = background;
    elementButton.innerText = "Clique!";
    return elementButton;
  }
}

const blueButton6 = Button6.create("blue");

/* Static
Você pode utilizar um método static para retornar a própria classe com propriedades já pré definidas.
*/

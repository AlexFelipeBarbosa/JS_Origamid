/* GET e SET
Podemos definir comportamentos diferentes de get e set para um método.
*/

const button = {
  get element() {
    return this._element;
  },
  set element(tipo) {
    this._element = document.createElement(tipo);
  },
};

button.element = "button"; //set
button.element; //get (<button></button>);

/* Valor estático
Se definirmos apenas o get de um método, teremos então um valor estático que não será possivel mudarmos.
*/
const matematica = {
  get PI() {
    return 3.14;
  },
};

console.log(matematica.PI);
console.log((matematica.PI = 20));

/* SET
Eu posso ter um método com SET apenas, que modifique outras propriedades do meu objeto.
*/
const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = "Banana";
frutas.nova = "Morango";
console.log(frutas.lista); //  ["Banana", "Morango"]

/* CLASS
Assim como em um objeto, as classes podem ter métodos de GET e SET também.
*/
class Button2 {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
}

const blueButton = new Button2("Comprar", "blue");
blueButton.element; // retorna o elemento.

/* SET e CLASS
Com o set podemos modificar apenas parte do elemento de get.
É comum definirmos variaveis privadas, utilizando o underscore _privada
*/
class Button3 {
  constructor(text) {
    this.text = text;
  }
  get element() {
    const elementType = this._elementType || "button";
    const buttonElement = document.createElement(elementType);
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

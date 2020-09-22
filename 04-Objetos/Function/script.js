console.log("Function ----------------->>");
console.log(" ");

/* Function
Toda função é criada com o construtor Function e por isso herda as suas 
propriedades e metodos.
*/

function areaQuadrado(lado) {
  return lado * lado;
}

// outra forma de criar uma função (muito pouco usada)
const perimetroQuadrado = new Function("lado", "return lado * 4");
console.log(perimetroQuadrado);

/* Propriedades
Function.length --> retorna o total de argumentos da função.
Function.name --> retorna uma string com o nome da função.
*/
function somar(n1, n2) {
  return n1 + n2;
}
somar.length; // 2
somar.name; // "somar"

/* function.call()
function.call(this, arg1, arg2, ...) executa a função, sendo possivel passarmos uma nova 
referencia ao "this" da mesma.
*/

const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}
descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018

/* This
O valor de this faz referencia ao objeto criado durante a construção do objeto(Constructor Function). Podemos trocar a referencia do metodo ao this, utilizando o call()
*/
const carros = ["Ford", "Fiat", "VW"];
carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

const frutas = ["Banana", "Pera", "Uva"];
carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta

/* Exemplo Real
O Objeto atribuido a lista será substituido pelo primeiro argumento de call()
*/
function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const lista = new Dom("ul");
lista.ativo("ativar");
console.log(lista);

/* O objeto deve ser parecido 
O novo valor de this deve ser semelhante a estrutura do valor do this original do método.
Caso contrário o método não conseguirá interagir de forma correta com o novo this.
*/
const novoSeletor = {
  element: document.querySelector("li"),
};

Dom.prototype.ativo.call(novoSeletor, "ativar");

/* Array-Like
HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array.
Por isso conseguimos utilizar os mesmos na substituição do this em call.
*/
const li = document.querySelectorAll("li");
const filtro = Array.prototype.filter.call(li, function (item) {
  return item.classList.contains("ativo");
});

filtro; // Retorna os itens que possuem ativo

/* function.apply()
O applay(this, [arg1, artg2,...]) -- funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
Obs. POdemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar
*/
const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros); // 44
Math.max.call(null, 3, 45, 6, 7, 20); // 45

/* APPLY vs CALL
A única diferença é a array como segundo argumento.
*/
const liAtivo = document.querySelectorAll("li");
function itemPossuiAtivo(item) {
  return item.classList.contains("ativo");
}
const filtro1 = Array.prototype.filter.call(liAtivo, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(liAtivo, [itemPossuiAtivo]);

/* function,bind()
Diferente de call e apply, bind(this, arg1, arg2, ...) não íra executar a função mas sim retornar a mesma com o novo contexto de this.
*/
const li2 = document.querySelectorAll("li");
const filtrarLi = Array.prototype.filter.bind(li2, function (item) {
  return item.classList.contains("ativo");
});
filtrarLi();

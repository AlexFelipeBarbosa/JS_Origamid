/* forEach
Constantemente vamos selecionar uma lista de itens do DOM.
A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
*/

const imgs = document.querySelectorAll("img");
imgs.forEach(function (item) {
  console.log(item);
});

/* Parâmetros do forEach
O primeiro parametro é o callback, ou seja, a função que será ativada a cada item.
Essa função pode receber 3 parametros:
valorAtual, index e array
*/
const imgs2 = document.querySelectorAll("img");
imgs2.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); // o item atual do loop
  console.log(index); // o numero do index
  console.log(array); // a array completa
});

console.log("forEach e Array");
/* forEach e Array
forEach é um método de Array, alguns objetos array-like possuem este método.
Caso não possua, o ideal é transforma-los em uma array.
*/
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

console.log("Arrow Function");
/* Arrow Function
Sintaxe curta em relação a function expression.
Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
*/
const imagens = document.querySelectorAll("img");
imagens.forEach((item) => {
  console.log(item);
});

console.log("Argumentos e Parênteses");
/* Argumentos e Parênteses
 */
const imagens2 = document.querySelectorAll("img");
// argumento único não precisa de parênteses.
imagens2.forEach((item) => {
  // imagens2.forEach(item => {})
  console.log(item);
});
// Multiplos argumentos precisam de parenteses
imagens2.forEach((item, index) => {
  console.log(item, index);
});
// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imagens2.forEach(() => {
  console.log(i++);
});

console.log("Return");
/* Return
É possivel omitir as chaves {} para uma função que retorna uma linha.
*/
const imagens3 = document.querySelectorAll("img");
imagens3.forEach((item) => console.log(item));

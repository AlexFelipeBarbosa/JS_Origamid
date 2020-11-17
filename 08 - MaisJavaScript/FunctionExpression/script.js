/* Function Declaration
São duas as formas mais comuns de declararmos uma função.
A que utlizamos até o momento é chamada de Function Declaration.
*/
function somar(a, b) {
  return a + b;
}

somar(4, 2); // 6

/* Function Expression
É criada a partir da declaração de uma variavel, na qual assinalamos uma função.
Esta função pode ser anônima ou nomeada.
A mesma poderá ser ativada através da variavel assinalada.
*/
const calcular = function (a, b) {
  return a + b;
};

calcular(3, 4); // 7

/* Hoisting
Function Declarations são completamentes definidas no momento do hoisting, já function expressions apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma function expression possui importancia.
*/
console.log(adicionar(4, 8)); // 12
//console.log(dividir(9, 3)); // da erro ...

function adicionar(a, b) {
  return a + b;
}

const dividir = function (a, b) {
  return a / b;
};

/* Arrow Function
Podemos criar utilizando arrow functions.
*/
const somar1 = (a, b) => a + b;
console.log(somar1(7, 3)); // 10

const quadrado = (a) => a * a;
console.log(quadrado(4)); // 16

/* Estrutura / Preferência
Geralmente o uso entre expression / declaration é uma questão de preferência.
Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.
*/
// Declarada como método de window vaza o escopo de bloco, como se fosse criada utlizando var

function somar2(a, b) {
  return a + b;
}

const dividir2 = (a, b) => a / b;

console.log(somar2(34, 78)); // 112
console.log(dividir2(15, 4)); // 3.75

/* IIFE - Immediately Invoked Function Expression
Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's
*/
var instrumento = "Violão";

(function () {
  // código isolado do escopo global
  var instrumento = "Cavaquinho";
  console.log(instrumento); // Cavaquinho
})();

console.log(instrumento); // Violão

/* IIFE - Arrow Function
Compiladores ainda transformam modules em IIFE's para manter a compatibilidade com browsers antigos.
*/
const instrumento2 = "Violão";

(() => {
  const instrumento2 = "Cavaquinho";
  console.log(instrumento2); // Cavaquinho
})();

console.log(instrumento2); // Violão

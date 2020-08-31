/* ID
getElementById --> Seleciona e retorna elementos do DOM
*/

// Selecionando pelo ID
const animaisSection = document.getElementById("animais");
console.log(animaisSection);
const contatoSection = document.getElementById("contato");
console.log(contatoSection);

// Retorna null caso não exista
const naoExiste = document.getElementById("teste");
console.log(naoExiste);

/* Classe e Tag
getElementsByClassName e getElementsByTagName
selecionam e retornam uma lista de elementos do DOM.
A lista retornada esta ao vivo, significa que se elementos forem adicionados, 
ela será automaticamente atualizada.
*/

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
const contatos = document.getElementsByClassName("grid-section contato");

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o primeiro elemento
console.log(gridSection[0]);

/* Seletor geral único
querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
*/
const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

/* Seletor Geral Lista
querySelectiorAll retorna todos os elementos compativeis com o seletor
CSS em uma NodeList.
*/
const gridSection2 = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o segundo elemento
console.log(gridSection2[1]);

/* Diferença entre HTMLCollection vs NodeList
A diferença esta nos métodos e propriedades de ambas. 
Alem disso a NodeList retornada com querySelectorAll é estática.
*/
const titulo2 = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");
titulo2.classList.add("grid-section");
console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

console.log("Array-Like");
/* Array-Like
HTMLCollection e NodeList são array-like, parecem uma array mas não são.
O método de array forEach() por exemplo, existe somente no NodeList.
É possivel transformar array-like em uma array real, utilizando o método
Array.from(gridSection)
*/
const gridSection3 = document.querySelectorAll(".grid-section");
gridSection3.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index); // index do item do array
  console.log(array); // a array completa
});
console.log(" ");

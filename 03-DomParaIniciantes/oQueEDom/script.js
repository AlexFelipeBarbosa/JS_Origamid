const href = window.location.href;
console.log(href);

/* Window e Document
São os objetos principais do DOM, boa parte da manipulação é feita através dos 
seus métodos e propriedades.
window é um objeto global, por isso não precisamos chamar ele na frente dos seus metodos 
e propriedades.
*/

// window.alert("Isso é um alerta");
// alert("Isso é um outro tipo de alerta"); // funciona também

const conteudo = document.querySelector("h1"); // seleciona o primeiro h1
console.log(conteudo);
document.body; // Retorna o body

/* Node
Toda tag html é representada pelo objeto Element e por isso herda os seus metodos e propriedades.
Element é um tipo de objeto Node.
*/
const titulo = document.querySelector("h1");
console.log(titulo.innerText); // retorna o texto
console.log(titulo.classList); // retorna as classes
console.log(titulo.id); // retorna o id
console.log(titulo.offsetHeight); // retorna a altura do elemento

titulo.addEventListener("click", function () {
  console.log("Clicou em " + titulo.innerText);
}); // ativa a função callback ao clicar no titulo.

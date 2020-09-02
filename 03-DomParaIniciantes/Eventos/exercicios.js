console.log("-------------------------- ");
console.log("Exercicios");
console.log(" ");

/* Quando o usuario clicar nos links internos do site, adicione a classe ativo ao item clicado
e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links.
*/
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink);
});

/* Selecione todos os elementos do site começando a partir do body,
ao clique mostre exatamente quais elementos estão sendo clicados.
*/
const todosElementos = document.querySelectorAll("body *");

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
});

/* Utilizando o código anterior, ao invés de mostrar no console, remova o elemento
que está sendo clicado, o metodo remove() remove um elemento.
*/
const todosElementos2 = document.querySelectorAll("body *");

function handleElemento2(event) {
  event.currentTarget.remove();
}

todosElementos2.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento2);
});

// Se o usuario clicar na tecla "t", aumente todo o texto do site
function handleClicouT(event) {
  console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle("textoMaior");
  }
}
window.addEventListener("keydown", handleClicouT);

/* outerHTML, innerHTML e innerText
Propriedades que retornam uma string contendo o html ou texto.
É possivel atribuir um novo valor para as mesmas.
element.innerText = 'Novo Texto'
*/

const menu = document.querySelector(".menu");
menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = "<p>Texto</p>";
menu.innerHTML = "<p>Texto</p>";

/* Transversing
Como navegar pelo DOM, utilizando suas propriedades e métodos.
*/
const lista = document.querySelector(".animais-lista");
console.log(lista);

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; //HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // ultimo filho

lista.querySelectorAll("li"); // todos os li's
lista.querySelector("li:last-child"); // ultimo filho

/* Element vs Node
Element's representam um elemento html, ou seja, uma tag.
Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
Obs. Geralmente estmos atras de um elemento e não de qualquer node em si.
*/
const lst = document.querySelector(".animais-lista");
lst.previousElementSibling; // elemento acima
lst.previousSibling; // node acima

lst.firstChild; // primeiro node child
lst.childNodes; // todos os node child

/* Manipulando Elementos
É possivel mover elementos no DOM com metodos de Node.
*/
const lista2 = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

contato.appendChild(lista2); // move a lista para o final de contato
contato.insertBefore(lista2, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
//contato.replaceChild(lista2, titulo); // substitui titulo por lista

/* Novos Elementos
Podemos criar novos elementos com o método
createElement()
*/
const animais = document.querySelector(".animais");
const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo titulo";
novoH1.classList.add("titulo");

animais.appendChild(novoH1);

/* Clonar Elementos
Todo elemento selecionado é único. Para criarmos um novo elemento 
baseado no anterior, é necessário utilizar o metodo
cloneNode()
Obs. true sinaliza para incluir os filhos
*/
const title = document.querySelector("h1");
const title2 = document.querySelector("h1");
const newTitle = title;
// title, title2 e newTitle são iguais

const cloneTitle = title.cloneNode(true);
const contat = document.querySelector(".contato");
contat.appendChild(cloneTitle);

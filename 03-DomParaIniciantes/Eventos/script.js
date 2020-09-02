/* addEventListener
Adiciona uma função ao elemento, esta chamada de callback, que será 
ativada assim que certo evento ocorrer neste elemento.
Obs. O terceiro parametro é opcional.
*/

const img = document.querySelector("img");
//elemento.addEventListener(event, callback, options)
img.addEventListener("click", () => {
  console.log("clicou");
});

/* Callback
É uma boa pratica separar a função de callback do addEventListener, ou seja, 
declarar uma função ao invés de passar diretamente uma funlção anonima.
*/
const img2 = document.querySelector("img");
function callback() {
  console.log("Clicou");
}

img2.addEventListener("click", callback);
img2.addEventListener("click", callback()); // undefined
img2.addEventListener("click", function () {
  console.log("Clicou!");
});

img2.addEventListener("click", () => {
  console.log("!Clicou!");
});

/* Event
O primeiro parâmetro do callback é referente ao evento que ocorreu.
Obs. Geralmente utilizam "e" como nome do parâmetro
*/
const img3 = document.querySelector("img");
function callback(event) {
  console.log(event);
}
img3.addEventListener("click", callback);

// Propriedades do Event
const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener("click", executarCallback);

/* event.preventDefault()
Previne o comportamento padrão do evento no browser.
No caso de um link externo, por exemplo, irá prevenir que o link seja ativado.
*/
const linkExterno = document.querySelector('a[href^="http"]');
console.log(linkExterno);

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);

console.log("this -----------------------------");
/* this
A palavra chave "this" é uma palavra especial de JavaScript, que pode fazer
referencia a diferentes objetos dependendo do contexto.
No caso dos eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
Obs. Geralmente igual ao event.currentTarget
*/
const imagem = document.querySelector("img");

function callback2(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute("src"));
}

imagem.addEventListener("click", callback2);

/* Diferentes Eventos
Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais.
Eventos podem ser adicionados a diferentes elementos, como o window e document também.
*/
const h1 = document.querySelector("h1");

function callback3(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", callback3);
h1.addEventListener("mouseenter", callback3);
window.addEventListener("scroll", callback3);
window.addEventListener("resize", callback3);
window.addEventListener("keydown", callback3);

/* Keyboard
Você pode adicionar atalhos para facilitar a navegação no seu site,
através de eventos do keyboard
*/
function handleKeyboard(event) {
  if (event.key === "a") document.body.classList.toggle("azul");
  else if (event.key === "v") document.body.classList.toggle("vermelho");
}

window.addEventListener("keydown", handleKeyboard);

/* forEach e Eventos
O método addEventListener é adicionado à um unico elemento, então é necessário 
um loop entre elementos de uma lista, para adicionarmos à cada um deles.
*/
const imagens = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imagens.forEach((imagem) => {
  imagem.addEventListener("click", imgSrc);
});

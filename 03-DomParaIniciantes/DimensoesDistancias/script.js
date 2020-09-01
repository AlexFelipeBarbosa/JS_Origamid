/* Height e Width
Estas são as propriedades e métodos dos objetos Element e HTMLElemnt,
a maioria delas são Read Only
*/

const section = document.querySelector(".animais");
section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro do scroll

/* offsetTop e offsetLeft
 */

const section2 = document.querySelector(".animais");
// distancia entre o top do elemento e topo da pagina
section2.offsetTop;

// Distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina
section2.offsetLeft;

/* getBoundingClientRect()
Método que retorna um objeto com valores width, height, 
distancias do elemento e mais.
*/
const section3 = document.querySelector(".animais");
const rect = section3.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distancia entre o topo do elemento e o scroll

/* Window
 */
window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerWidth; // sooma a barra de endereço

window.pageYOffset; // distancia total do scroll horizontal
window.pageXOffset; // distancia total do scroll vertical

if (window.innerWidth <= 600) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

/* matchMedia()
Utilize um media-querie como no CSS para verificar a largura do browser
*/
const small = window.matchMedia("(max-width: 600 px)");
if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

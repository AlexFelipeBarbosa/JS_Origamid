/* classList
Retorna uma lista com as classes do elemento.
Permite adicionar, remover e verificar se contem.
*/
const menu = document.querySelector(".menu");
console.log(menu.className); // string
console.log(menu.classList); // lista de classes
menu.classList.add("ativo");
menu.classList.add("ativo", "mobile"); // duas classes
menu.classList.remove("ativo");
menu.classList.toggle("ativo"); // se exister a classe ele remove, se não existir ele adiciona
menu.classList.contains("ativo"); // true ou false (verifica se existe ou não)
menu.classList.replace("ativo", "inativo");

/* Attributes
Retorna uma array-like com os atributos do elemento.
*/
const animais = document.querySelector(".animais");
animais.attributes; // retorna todos os atributos
console.log(animais.attributes);

animais.attributes[0]; // retorna o primeiro atributo
console.log(animais.attributes[0]);

console.log("getAttribute e setAttribute..........");
/* getAttribute e setAttribute
Métodos que retornam ou definem de acordo com o atributo selecionado.  
 */
const img = document.querySelector("img");
img.getAttribute("src"); // valor do scr
console.log(img.getAttribute("src"));

img.setAttribute("alt", "Texto Alternativo"); //muda o alt (passando atributo e valor)
img.hasAttribute("id"); // true ou falso (verifica se existe aquele atributo especificamente)
img.removeAttribute("alt"); // remove o alt
img.hasAttributes(); // true ou false (se tem algum atributo)

/* Read Only vs Writable
Existem propriedades que não permitem a mudança de seus valores, essas são considerados
Read Only, ou seja, somente leitura.
Obs. Lembre-se que podemos modificar o valor de uma propriedade
objeto.propriedade = ''
*/
const animais2 = document.querySelector(".animais");
animais2.className; // string com o nome das classes
animais2.className = "azul"; // substitui completamente a string
animais2.className += " vermelho"; // adiciona vermelho a string
animais2.attributes = 'class="ativo"'; // não funciona, read-only

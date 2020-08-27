console.log(" ");
console.log("Script 2");
console.log(" ");

/* Tudo é Objeto
Strings, números, boolean, objetos e mais, possuem propriedades e métodos.
Por isso são objetos.
Uma String herda propriedades e métodos do construtor String()
*/
var nome = "Alex";
console.log(nome.length); // 4
console.log(nome.charAt(2)); // e
console.log(nome.replace("le", "lala")); // Alalax
console.log(nome); // Alex

/* Número
Por um breve momento o número é envolvido em um Objeto (coerção), 
tendo acesso assim as suas propriedades e metodos.
*/
var altura = 1.8;
console.log(altura.toString()); // '1.8'
console.log(altura.toFixed()); // 2

/* Funções */
function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado.toString());
console.log(areaQuadrado.length); //  total de parametros: 1

/* Elementos do DOM
Praticamente todos os efeitos com JS são feitos utilizando propriedades 
e métodos de objetos do DOM
*/
var btn = document.querySelector(".btn");
btn.classList.add("pesquisar"); // adiciona a classe "pesquisar"
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});
console.log(btn.classList);

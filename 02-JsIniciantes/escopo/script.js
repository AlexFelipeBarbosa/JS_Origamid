// "use strict";

/* Escopo de Função 
Variaveis declaradas dentro de funções não são acessadas fora das mesmas.
Escopo evita o conflito entre nomes.
*/

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}
mostrarCarro(); // Fusca
//console.log(carro); // Erro: carro is not defined

/* Variável Global (erro)
Declarar variaveis sem a palavra var, const ou let, cria uma variavel
que pode ser acessada em qualquer escopo (global).
Isso é um erro.
"use strict" impede isso.
*/
function mostrarCarro2() {
  carro = "Fusca";
  console.log(carro);
}
mostrarCarro2(); // Fusca
console.log(carro); // Fusca

/* Escopo de Função (Pai)
Variaveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
*/
var carro3 = "Fusca";
function mostraCarro3() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}
mostraCarro3(); // Meu carro é um Fusca
console.log(carro); // Fusca

/* Escopo de Bloco
Variáveis criar com var, vazam o bloco. Por isso com a introdução 
do ES6 a melhor forma de declararmos uma variavel é utilizando 
const e let, pois estas respeitam o escopo de bloco.
*/
if (true) {
  var carro4 = "Corsa";
  console.log(carro4); // Corsa
}
console.log(carro4); // Corsa
// Mesmo exemplo do codigo acima, só que agora usando o let
if (true) {
  let carro5 = "Belina";
  console.log(carro5); // Corsa
}
//console.log(carro5); // Erro: carro5 is not defined

/* Mesmo com a condição falsa, a variavel ainda será declarada utilizando 
hoisting e o valor ficará undefined.
Como no exemplo abaixo:
*/
if (false) {
  var carro6 = "Chevette";
  console.log(carro6);
}
console.log(carro6); // undefined

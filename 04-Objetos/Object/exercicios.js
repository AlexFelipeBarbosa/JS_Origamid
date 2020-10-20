console.log(" ");
console.log("Exercicios -----------------------------");
console.log(" ");

/* Crie uma função que verifique corretamente o tipo de dado.
 */
function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}
console.log(verificarDado({})); // [object Object]
console.log(verificarDado([])); // [object Array]
console.log(verificarDado("Texto")); // [object String]

/* Crie um objeto quadrado com a propriedade lados e torne ela imutavel
 */
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  },
});
console.log(quadrado); // {lados: 4}

/* Previna qualquer mudança no objeto abaixo.
 */
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

/* Liste o nome de todos as propriedades do protótipo de String e Array
 */
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));

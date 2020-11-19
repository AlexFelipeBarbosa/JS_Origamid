/* Iterable
São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida.
Ex: Array, String, NodeList, boa parte das Array-Like e outros.
*/
const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
  console.log(headers)
);

/* for ...of
É possivel fazermos um loop por cada iteração do objeto iterável utilizando o for...of.
Além deste loop pode também utilizar o Spread Operator nos mesmos.
*/
const frutas2 = ["Banana", "Mamão", "Melancia"];
const frase2 = "Aprendendo JavaScript";

for (const fruta of frutas2) {
  console.log(fruta);
}

for (const char of frase2) {
  console.log(char);
}

/* Spread e for...of
Com o for loop podemos manipular cada um dos elementos do objeto iterável.
*/
const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
  btn.style.background = "blue";
}

console.log(...buttons);

/* Apenas iteráveis
O for...of não irá funcionar em um objeto comum que não seja iterável.
*/

const carro = {
  marca: "Honda",
  ano: 2018,
};

//Erro, não é iterável
/*
for (const propriedade of carro) {
  console.log(propriedade);
}
*/

/* for...in
Este loop irá retornar a chave(key) de todas as propriedades enumeráveis(que não sejam simbolos) de um objeto.
*/
const carro2 = {
  marca: "Honda",
  ano: 2020,
};
for (const propriedade in carro2) {
  console.log(propriedade);
}

/* Arrays e for...in
Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.
*/
const frutas3 = ["Banana", "Morango", "Abacaxi"];

for (const index in frutas3) {
  console.log(index);
}

for (const index in frutas3) {
  console.log(frutas3[index]);
}

/* Chave e Valor
Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.
*/
const btn1 = document.querySelector("button");
const btnStyles = getComputedStyle(btn1);

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

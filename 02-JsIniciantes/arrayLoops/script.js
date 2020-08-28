/* Array
É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes 
valores em uma única variavel.
*/
var videoGames = ["Switch", "PS4", "XBox"];
console.log(videoGames[0]); // Switch
console.log(videoGames[2]); // XBox

// Métodos e Propriedades de uma Array
var videoGames2 = ["Switch", "PS4", "XBox"];
console.log(videoGames2.pop()); // Remove o último item e retorna ele.
console.log(videoGames2.push("3DS")); // Adiciona um item ao final da Array.
console.log(videoGames2.length); // 3 - Tamanho da Array
console.log(videoGames2); // [ "Switch", "PS4", "3DS" ]

/* For Loop
Fazem algo repetidamente até que uma condicação seja atingida.
O for loop possui 3 partes,
inicio, condição e incremento.
*/
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
} // retorna de 0 a 9 no console.

// While Loop
var i = 10;
while (i < 20) {
  console.log(i);
  i++;
} // retorna de 10 a 19 no console.

// Arrays e Loops
var videoGames3 = ["Switch", "PS4", "Xbox", "3DS"];
for (var i = 0; i < videoGames3.length; i++) {
  console.log(videoGames3[i]);
}

/* Break
O loop irá parar caso encontre a palavra break
*/
var videoGames4 = ["Switch", "PS4", "Xbox", "3DS"];
for (var i = 0; i < videoGames4.length; i++) {
  console.log(videoGames4[i]);
  if (videoGames4[i] === "PS4") {
    break;
  }
}

/* forEach
forEach é um método que executa uma função para cada item da Array.
É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
Podemos passar os seguintes parametros:
item, index e array
*/
var videoGames5 = ["Switch", "PS4", "Xbox", "3DS"];
videoGames5.forEach(function (item) {
  console.log(item);
}); // o argumento item será atribuido dinamicamente.

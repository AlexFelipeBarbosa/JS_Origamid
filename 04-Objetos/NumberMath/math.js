console.log("Math -------------------");

/* Math
É um objeto nativo que possui propriedades e métodos de expressões matematicas comuns.
*/
Math.PI; // 3.141592653589793
Math.E; // 2.718281828459045
Math.LN10; //2.302585092994046

/* 
Math.abs() -- retorna o valor absoluto, ou seja, transforma negativo em positivo.
Math.ceil() -- arredonda para cima, retornando sempre um inteiro.
Math.floor() -- arredonda para baixo, retornando sempre um inteiro.
Math.round() -- arredonda para o número inteiro mais próximo.
*/
Math.abs(-5.5); // 5.5
Math.ceil(4.8665655656); // 5
Math.ceil(4.15159898); // 5
Math.floor(5.9898982); // 5
Math.floor(5.12125); // 5
Math.round(3.8989); // 4
Math.round(3.124); // 3

/* 
Math.max() -- retorna o maior número de uma lista de argumentos.
Math.min() -- retorna o menor número de uma lista de argumentos.
Math.random() -- retorna um numero aleatório entre 0 e 1.
*/
Math.max(5, 6, 9, 45, 98, 5, 4, 9, 1, 5, 4, 55, 77); // 98
Math.min(5, 6, 9, 45, 98, 5, 4, 9, 1, 5, 4, 55, 77); // 1
Math.random(); // 0.xxxxxxx
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Numero random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// Math.floor(Math.random() * (max - min + 1)) + min;

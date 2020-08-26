console.log('Exercicios - Números e Operadores');

// Qual resultado da seguinte expressão
var total = 10 + 5 * 2 / 2 + 20;
console.log(total); // 35

// Crie duas expressões que retornem NaN
var altura = 170;
var medida = 'cm';
var tamanho = altura + medida;
console.log(tamanho);
console.log(tamanho / 2); // NaN

var distancia = 40;
var distancia2 = '45km';
var distanciaTotal = distancia + +distancia2;
console.log(distanciaTotal); // NaN

// Somar a string '200' com o numero 50 e retornar 250
var valor1 = '200';
var valor2 = 50;
var valorFinal = +valor1 + valor2;
console.log(valorFinal); // 250

// Incremente o número 5 e retorne o valor incrementado
var incremento = 5;
console.log(++incremento); //6


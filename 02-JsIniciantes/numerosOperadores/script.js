var idade = 38;
console.log(idade);

var preco = 1.99;
console.log(preco);


// exponencial
var valor = 2e10;
console.log(valor); // 20000000000

var valor2 = 2e2;
console.log(valor2); // 200

var valor3 = 2e-2;
console.log(valor3); // 0.02


// Operadores Aritmeticos
console.log('Operadores Aritmeticos');
var soma = 100 + 50; // 150
var subtracao = 100-50;  //50
var multiplicacao = 100*2; 200
var divisao = 100/2;  //50
var expoente = 2**4;  //16
var modulo = 14%5;  // 4

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(expoente);
console.log(modulo);

// Operadores Aritmeticos (Strings)
console.log('Operadores Aritmeticos (Strings)');
var soma = '100' + 50; // 10050
var subtracao = '100' - 50;  // 50
var multiplicacao = '100' * 2; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

// Para verificar se uma variavel é NaN ou não, é só utilizar a função isNaN()
var testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN)); // true

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade;
console.log(peso); // 80kg
var pesoPorDois = peso / 2;
console.log(pesoPorDois); // NaN

/* A ordem das operações é importante
   Começa por multiplicação e divisão, depois por soma e subtração.
   Utilize os parenteses para priorizar uma expressão. 
*/
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);

// Operadores Aritmeticos Unários
// ++ incremento      --decremento
console.log('Operadores Aritméticos Unários');
var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2) // 6

// O + e - tenta transformar o valor seguinte em numero
var idade = '38';
console.log(+idade); // 38
console.log(-idade); //-38
console.log(+idade + 5); //43

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

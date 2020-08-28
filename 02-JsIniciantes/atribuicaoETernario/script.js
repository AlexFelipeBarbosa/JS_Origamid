/* Operadores de Atribuição
Podem funcionario como formas abreviadas
*/
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; //x = x ** y (9765625)

/* Operador Ternário
Abreviação de condicionais if e else
Geralmente utilizado quando precisamos atribuir um valor para uma variavel,
dependendo de uma condição.
*/
var idade = 19;
// condicao ? true : false
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

/* If abreviado
Não é necessario abrir e fechar as chaves {} quando retornamos apenas uma linha de código.
*/
var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Não possui faculdade");

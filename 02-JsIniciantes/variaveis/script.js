// Declarando variaveis com Var
var nome = 'Alex';
var idade = 38;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

// Calculo simples utilizando variaveis
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado *  preco;

console.log(totalPreco);

// Utilizando virgula, sem precisar declarar o var para todas as variaveis
var sobrenome = 'Felipe', 
    cidade = 'Batatais', 
    estado = 'SP';

console.log(sobrenome, cidade, estado);

// Declarando a variavel sem receber valor -- undefined
var semDefinir;
console.log(semDefinir);
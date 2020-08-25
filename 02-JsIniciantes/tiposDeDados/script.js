var nome = 'Alex';
var idade = 38;
var simbolo = Symbol();
console.log(nome, idade, simbolo);

// Verificando o tipo da Variavel
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof simbolo);

// Somando / concatenando string
var meuNome = 'Alex',
    meuSobreNome = 'Felipe',
    meuUltimoNome = 'Barbosa',
    meuNomeCompleto = meuNome + ' ' + meuSobreNome + ' ' + meuUltimoNome;

console.log(meuNomeCompleto);

// Somando / Concatenando number com string
var gols = 1000;
var frase = 'Romario fez ' + gols + ' gols';
console.log(frase);

// concatenando number com string o typeof será string
console.log(typeof frase);


// somando number
var ano = 2020;
var soma = 7;
console.log(ano + soma); // Resultado: 2027

// muito cuidado ao concatenar numero com string 
var ano = '2020'; // neste exemplo o numero esta entre aspas o que representa string no JavaScript
var soma = 5;
console.log(ano + soma); // Resultado: 20205 (ele somente concatena e não soma os valores)

// template string
var gols = 1000;
var frase1 = 'Romario fez ' + gols + ' gols';
var frase2 = `Romario fez ${gols} gols`;
console.log(frase1);
console.log(frase2); // as duas frases irão retornar a mesma coisa.

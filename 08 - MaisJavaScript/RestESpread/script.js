/* Parâmetros
Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos.
Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.
*/
function perimetroForma(lado, totalLados) {
  return lado * totalLados;
}

console.log(perimetroForma(10, 4)); // 40
console.log(perimetroForma(10)); // como não passou o segundo parametro o retorno é:  NAN

/* parametro Padrão (Default) ES5
Antes do ES6 a forma de definirmos um valor padrão para um parâmetro, era através de uma expressão.
*/
function perimetroForma2(lado, totalLados) {
  totalLados = totalLados || 4; // se não for informado o valor padrão nesse caso é 4.
  return lado * totalLados;
}
console.log(perimetroForma2(10, 7)); // 70
console.log(perimetroForma2(15)); // 60 (pegou o valor padrão)

/* Arguments
A palavra chave arguments é um objeto Array-like criado dentro da função.
Esse objeto contém os valores dos argumentos.
*/
function perimetroForma3(lado, totalLados = 4) {
  console.log(arguments);
  return lado * totalLados;
}
console.log(perimetroForma3(12)); // 48
console.log(perimetroForma3(10, 4, 20)); // 40

/* Parâmetro Rest
É possivel declararmos um parâmetro utilizando ... na frente do mesmo.
Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.
Obs. Só é possivel ter um único parâmetro rest e ele deve ser o último.
*/
function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou!.");
  });
}

anunciarGanhadores("Alex", "João", "Felipe", "Maria", "Marta");

/* Rest vs Arguments
Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças.
Sendo rest uma array real e arguments um objeto Array-like.
*/
function anunciarGanhadores2(premio, ...ganhadores) {
  console.log(ganhadores);
  console.log(arguments);
}

anunciarGanhadores2("Carro", "Alex", "João", "Maria", "Catarina");

/* Operador Spread
Assim como o rest, o operador Spread também utiliza os ... para ser ativado.
O spread irá destribuir um item iterável, um por um
*/
const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];

const comidas = [...frutas, "Pizza", ...legumes];
console.log(comidas);

/* Spread Argument
O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.
*/
const numeroMaximo = Math.max(
  4,
  5,
  66,
  98,
  11,
  35,
  3,
  798,
  5,
  4,
  3,
  2,
  1,
  5,
  6,
  7,
  55,
  01,
  165
);

console.log(numeroMaximo); // 798

const listaNumeros = [1, 13, 21, 15, 16, 17, 1, 2, 9, 5, 6, 7, 33];
console.log(listaNumeros);

const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread); // 33

/* Transformar em Array
É possivel transformar itens iteráveis em uma array real com o Spread.
*/
const btns = document.querySelectorAll("button");
const btnsArray = [...btns];

const frase = "Isso é JavaScript";
const fraseArray = [...frase];
console.log(fraseArray);

console.log("Exercicios -------------");
console.log("");

// Retorne um numero aleatorio entre 1050 e 2000
const vrMaximo = 2000;
const vrMinimo = 1050;
let resultado;
resultado = Math.floor(Math.random() * (vrMaximo - vrMinimo + 1)) + vrMinimo;
console.log(resultado);

// Retorne o maior numero da lista abaixo
const numeros = "4,5,20,8,9";
const arrayNumeros = numeros.split(",");
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);

// Crie uma função para limpar os preços e retornar os números com centavos arredondados e depois retorne a soma total;
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230   ", "r$    200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

console.log(soma);
limparPreco(listaPrecos[1]);

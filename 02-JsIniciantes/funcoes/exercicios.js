console.log(" ");
console.log("Exercicios");

// Crie uma função para verificar se o valor é Truthy
function isTruthy(dado) {
  return !!dado;
}
console.log(isTruthy("teste"));

// Crie um função matematica que retorne o perimetro de um quadrado.
// Lembrando: perimetro é a soma dos quatro lados do quadrado.
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(5));

// Crie uma função que retorne seu nome completo.
// Ela deve possuir os parametros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Alex", "Barbosa"));

// Crie uma função que verifica se um numero é par
function verificaPar(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPar(19));

// Crie uma função que retorne o tipo de dado do argumento passado nela.
function tipoDado(dado) {
  return typeof dado;
}
console.log(tipoDado("alex"));

/* addEventListener é uma função nativa do JavaScript
   O primeiro parametro é o evento que ocorre e o segundo o Callback
   Utilize essa função para mostrar no console o seu nome completo, quando o evento 'scroll' ocorrer.
*/
addEventListener("scroll", function () {
  console.log("Alex Felipe Barbosa");
});

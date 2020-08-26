console.log("Exercicios");

// Verifique se sua idade é maior que a de algum parente. Dependendo do resultado coloque
// 'É maior', 'É igual', 'É menor'
var minhaIdade = 50;
var idadeParente = 50;
if (minhaIdade < idadeParente) {
  console.log("É menor");
} else if (minhaIdade > idadeParente) {
  console.log("É maior");
} else {
  console.log("É igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variaveis são Truthy ou Falsy
var nome = "Alex"; // true
var idade = 38; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com a China (em milhoes)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("Brasil tem mais habitantes!");
} else {
  console.log("China tem mais habitantes");
}

// O que irá aparecer no Console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no Console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}

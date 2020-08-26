function areaQuadrado(lado) {
  console.log(lado * lado);
  return;
}
areaQuadrado(2);

/* Parametros e Argumentos
   Ao criar uma função, você pode definir parâmetros.
   Ao executar uma função, você pode passar argumentos.
*/

// Peso e Altura são os parametros
function imc(peso, altura) {
  const imc = peso / (altura * altura);
  console.log(imc);
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(70, 1.7); // 70 e 1.70 são os argumentos

/* Parenteses executa a função
   Obs. Se apenas definirmos a função com o function e não executarmos a mesma, nada que 
   estiver dentro irá acontecer.  
*/
function corFavorita(cor) {
  if (cor === "azul") {
    console.log("Você gosta do céu!");
    return;
  } else if (cor === "verde") {
    console.log("Você gosta do mato!");
    return;
  } else {
    console.log("Você não tem cor favorita!");
    return;
  }
}
corFavorita(); // retorna "Você não tem cor favorita"

/* Argumentos podem ser funções
Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
*/
addEventListener("click", function () {
  console.log("Clicou");
});
/* A função acima possui dois argumentos.
   Primeiro é a string 'click'
   Segundo é uma função anonima.

   Funções anonimas são aquelas em que o nome da função não é definido, escritas como:
   function(){}  ou     ()=>{}
*/

/* Valores retornados
Uma função pode retornar qualquer tipo de dado e até outras funções.
Obs. Cuidado! Retornar diferentes tipos de dados na mesma função não é uma boa ideia.
*/
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe sua idade"; // aqui retorna uma string
  } else if (idade >= 60) {
    return true; // aqui retorna booleano
  } else {
    return false; // aqui retornar booleano
  }
}
// Misturar o retorno entre string e booleano não é uma boa pratica.

console.log(terceiraIdade(59));

/* Escopo
Variaveis e funções definidas dentro de um bloco {}, não são visiveis fora dele.
Na função abaixo por exemplo a variavel totalPaises só podera ser usada dentro da função precisoVisitar
*/
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para conhecer`;
}
console.log(precisoVisitar(10));

/* Escopo Léxico
Funções conseguem acessar variaveis que foram criadas no contexto "pai"
*/
var profissao = "Programador";
function dados() {
  var nome = "Alex",
    idade = 38;

  function outrosDados() {
    var endereco = "Batatais";
    var idade = 35;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados()); // retorna: Alex, 35, Batatais, Programador
//console.log(outrosDados()); // retorna Erro: Uncaught ReferenceError: outrosDados is not defined

/* Hoisting
Antes de executar um função, o JavaScript 'move' todas as funções declaradas para memoria.
No exemplo a abaixo primeiro é invocado a função imc2 e depois que ela é definida. E mesmo assim funciona normalmente.
*/
imc2(85, 1.67);
function imc2(peso, altura) {
  const imc = peso / (altura * altura);
  console.log(imc);
}

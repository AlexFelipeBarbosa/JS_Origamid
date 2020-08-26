// Boolean (Verdadeiro ou Falso)
var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais
if (possuiGraduacao) {
  console.log("Possui Graduação");
} else {
  console.log("Não possui Graduação");
}
// Retorna "Possui Graduação" e não executa o else

// Utilizando o Else if
if (possuiDoutorado) {
  console.log("Possui Graduação e possui Doutorado");
} else if (possuiGraduacao) {
  console.log("Possui Graduaçao, mas não possui Doutorado");
} else {
  console.log("Não possui Graduação");
}
// Retorna 'Possui Graduação, mas não possui Doutorado'

/* Truthy e Falsy
Existem valores que retornam true e outros que retornam false 
quando verificados em uma expressão booleana
*/
// Falsy
if (false);
if (0); // ou -0
if (NaN);
if (null);
if (undefined);
if (""); // ou "" ou ``
// Todo o resto da truthy (Verdadeiro)
// Truthy
if (true);
if (1);
if (" ");
if ("Alex");
if (-5);
if ({});

/* Operador lógico de Negação
   O operador ! nega uma operação booleana. Ou seja, !true é igual a false 
*/
if (!true); // false
if (!1); // false
if (!""); // true
if (!undefined); // true
if (!!" "); // true
if (!!""); // false
/* Dica
  Você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy
*/

/* Operadores de Comparação
   Vão sempre retornar um valor booleano
*/
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

/* Operadores de Comparação
   O == faz uma comparação não tão estrita e o === faz uma comparação estrita,
   ou seja, o tipo de dado dever o mesmo quando usamos ===
*/

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

/*  Operadores Lógicos && (e)
    Compara se uma expressão "e" a outra é verdadeira
    Se ambos os valores forem true ele irá retornar o ultimo valor verificado.
    Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os proximos.
*/
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // Cão
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

/* Operadores Lógicos || (ou)
   Compara se uma expressão "ou" outra é verdadeira.
   Retorna o primeiro valor true que encontrar.
*/
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; //'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // 'Gato'
5 >= 5 || 3 < 6; // true

/* Switch
   Com o switch você pode verificar se uma variavel é igual à diferentes 
   valores utilizando o case.
   Caso ele seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/
var corFavorita = "Azul";
switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu!");
    break;
  case "Vermelho":
    console.log("Olhe para rosas!");
    break;
  case "Amarelo":
    console.log("Olhe para o sol!");
    break;
  default:
    console.log("Você não tem uma cor favorita");
}

console.log(" ");
console.log("Exercicios");
console.log(" ");

/* Crie um array com os anos que o Brasil ganhou a copa
1958, 1962, 1970, 1994, 2002
*/
var copas = [1958, 1962, 1970, 1994, 2002];

/* Interaja com o array utilizando um loop, para mostrar no console
a seguinte mensagem: 'O Brasil ganhou a Copa de '
*/
for (var i = 0; i < copas.length; i++) {
  console.log(`O Brasil foi campeão da Copa de ${copas[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maça", "Pera", "Uva", "Melância"];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

/* Coloque a ultima fruta da array acima em uma variavel, sem remover a mesma da array.
 */
var ultimaFruta = frutas[frutas.length - 1];
console.log("Ultima Fruta: " + ultimaFruta);

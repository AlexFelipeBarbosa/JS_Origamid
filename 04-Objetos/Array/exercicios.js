console.log("Exercicios ---------------");
console.log(" ");

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
/*
1 - Remova o primeiro valor de comidas e coloque em uma variavel
2 - Remova o último valor de comidas e coloque em uma variavel
3 - Adicione 'Arroz' ao final da array
4 - Adicione 'Peixe' e 'Batata' ao inicio da array
*/

// 1 -
const primeiroValor = comidas.shift();
console.log(primeiroValor);
console.log(comidas);

// 2
const ultimoValor = comidas.pop();
console.log(ultimoValor);
console.log(comidas);

// 3
comidas.push("Arroz");
console.log(comidas);

// 4
comidas.unshift("Peixe", "Batata");
console.log(comidas);

console.log("--------------------------------------------------------------");

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
/*
1 - Arrume os estudantes em ordem allfabética.
2 - Inverta a ordem dos estudantes
3 - Verifique se Joana faz parte dos estudantes.
4 - Verifique se Juliana faz parte dos estudantes.
*/

// 1
console.log(estudantes);
estudantes.sort();
console.log(estudantes);

// 2
estudantes.reverse();
console.log(estudantes);

// 3
if (estudantes.includes("Joana")) {
  console.log("Existe");
} else {
  console.log("Não existe");
}

// 4
if (estudantes.includes("Juliana")) {
  console.log("Existe");
} else {
  console.log("Não existe");
}

console.log("--------------------------------------------------------------");

let html = `
           <section>
            <div> Sobre <div>
            <div> Produtos <div>
            <div> Contato <div>
          </section>`;

// Substitua section por ul e div com li, utilizando split e join
console.log(html);
html = html.split("section").join("ul").split("div").join("li");
console.log(html);

console.log("--------------------------------------------------------------");

const marcaCarros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o ultimo carro, mas antes de remover salve a array original em outra variavel

const marcaCarrosCopia = marcaCarros.slice();
marcaCarros.pop();

console.log(marcaCarros);
console.log(marcaCarrosCopia);

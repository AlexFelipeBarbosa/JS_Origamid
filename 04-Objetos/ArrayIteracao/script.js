console.log("Array e Iteração ---------------");
console.log(" ");

/* [].forEach()
[].forEach(callback(itemAtual, index, array))
A função callback é executada para cada item da array.
Ela possui 3 argumentos, 
    itemAtual (valor do item do array)
    index (index do valor na array)  
    array (array original)
Obs. O método sempre retorna undefined
*/

let carros = ["Ford", "Fiat", "Honda"];
carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase(), index, array);
});

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toLowerCase(), index, array);
});

// Arrow Function
const li = document.querySelectorAll("li");
li.forEach((item) => item.classList.add("ativa"));

li.forEach(function (item) {
  item.classList.add("ativa");
});

/* Modificar a Array Original
O terceiro argumento do callback é uma referencia direta e se modificado irá também
modificar a array original.
Obs. é melhor utilizarmos o map para isso.
*/
carros = ["Ford", "Fiat", "Honda"];
carros.forEach((item, index, array) => {
  array[index] = "Carro " + item;
});
console.log(carros); //  ["Carro Ford", "Carro Fiat", "Carro Honda"]

/* [].map()
[].map(callback(itemAtual, index, array))
Funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna
uma nova array com valores atualizados de acordo com o return de cada iteração.
*/
carros = ["Ford", "Fiat", "Honda"];
const newCarros = carros.map((item) => {
  return "Carro " + item;
});
console.log(carros); // ["Ford", "Fiat", "Honda"]
console.log(newCarros); // ["Carro Ford", "Carro Fiat", "Carro Honda"]

/* Arrow Function e [].map()
Uma Arrow Function de linha única e sem chaves irá retornar o valor após 
a fat arrow =>
*/
let numeros = [2, 4, 6, 8, 10, 12, 14, 15, 19, 22, 31];
const numerosX3 = numeros.map((n) => n * 3);
console.log(numerosX3); //  [6, 12, 18, 24, 30, 36, 42, 45, 57, 66, 93]

/* map vs forEach
Se o objetivo for modificar os valores da array atual, sempre utilize o map,
pois assim uma nova array com os valores modificados é retornada e você pode 
imediatamente iterar novamente sobre estes valores.
*/

/* [].map() com Objetos
MAP pode ser muito útil para interagirmos com uma array de objetos, 
onde desejamos isolar um valor único de cada objeto.
*/
let aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);
console.log(tempoAulas);

/* Reduce
[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
Executa a função callback para cada item da Array. Um valor especial existe nessa função 
de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
*/
aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
  return acumulador + atual;
});
console.log(total1); // 65

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
console.log(total2); // 165

/* Reduce 
- Passo a passo 1
      O primeiro parametro do callback é o valor do segundo argumento passado no reduce(callback,inicial) durante a primeira iteração.
      Nas iterações seguintes este valor passa a ser retornado pela anterior.
- Passo a passo 2 
      Se não definirmos o valor inicial do acumulador, ele ira "pular" a primeira iteração e começar a partir da segunda.
      Nesse caso o valor do acumulador será o valor do item da primeira iteração.
*/

// Maior Valor com REDUCE
const numeros1 = [10, 25, 60, 5, 35, 10, 7, 15, 33, 55, 38];
const maiorValor = numeros1.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});
console.log(maiorValor); // 60

// Podemos retornar outros valores com o REDUCE (retornando um objeto)
aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {}); // passando um objeto vazio como inicial
console.log(listaAulas);

/* reduceRight
Existe também o método [].reduceRight()
A diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera
da esquerda para direita
*/
let frutas = ["Banana", "Pêra", "Uva"];
const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

console.log(frutasRight); // Uva Pêra Banana
console.log(frutasLeft); // Banana Pêra Uva

/* SOME
[].some() -- se pelo menos um return da iteração for truthy, ele retorna true.
*/
frutas = ["Banana", "Pera", "Uva"];
const temUva = frutas.some((fruta) => {
  return fruta === "Uva";
});
console.log(temUva); // true

function maiorQue100(numero) {
  return numero > 100;
}

const numeros2 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros2.some(maiorQue100);
console.log(temMaior); // true

/* EVERY
[].every() -- se todos os returns das iterações forem truthy, o método irá retornar true.
Se pelo menos um for falsy, ele irá retornar false.
*/
frutas = ["Banana", "Pera", "Uva", ""];
// False pois pelo menos uma fruta está vazia '', o que é um valor falsy
const arraysCheias = frutas.every((fruta) => {
  return fruta; // false
});
console.log(arraysCheias); // false

const numeros3 = [6, 43, 22, 88, 101, 29];
const maiorQue5 = numeros3.every((x) => x > 5);
console.log(maiorQue5); // true

/* find e findIndex
[].find() -- retorna o valor atual da primeira iteração que retornar um valor truthy.
[].findIndex() -- ao invés de retornar o valor, retorna o index deste valor no array.
*/
frutas = ["Banana", "Pera", "Uva", "Maça"];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
});
console.log(buscaUva); // 2

const numeros4 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros4.find((x) => x > 45);
console.log(buscaMaior45); // 88

/* filter
[].filter() -- retorna uma array com a lista de valores que durante a sua iteração
retornaram um valor truthy.
*/
frutas = ["Banana", undefined, , null, "", "Uva", 0, "Maça"];
const arrayLimpa = frutas.filter((fruta) => {
  return fruta;
});
console.log(arrayLimpa); // ["Banana", "Uva", "Maça"]

const numeros5 = [6, 43, 22, 88, 101, 29];
const maior45 = numeros5.filter((x) => x > 45);
console.log(maior45); // [88, 101]

// Filter em Objetos
aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const aulaMaiores = aulas.filter((aula) => {
  return aula.min > 15;
});
console.log(aulaMaiores);

console.log("Array ---------------");
console.log(" ");

/* Arrays
Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays,
boolean, number, functions, objects e mais.
*/
let instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]("Ford");
dados[1][2].cor; // azul

/* Construção de Arrays
Toda array herda os metodos e propriedades do protótipo do construtor Array.
Obs. Os valores das array's não são estáticos
*/
instrumentos = ["Guitarra", "Baixo", "Violão"];
let carros = new Array("Corola", "Mustang", "Honda");

carros[1]; // Mustang
carros[2] = "Ferrari";
carros[10] = "Corsa";
carros.length; // 11

/* Array.from()
Array.from() é um método utilizado para transformar array-like objects, em uma array
*/
let li = document.querySelectorAll("li"); // NodeList
li = Array.from(li); // Array

let carros2 = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4,
};
const carros2Array = Array.from(carros2);
console.log(carros2Array);

/* Array.isArray()
Verifica se o valor passado é uma array e retorna um valor booleano
*/
let li2 = document.querySelectorAll("li"); // NodeList
Array.isArray(li2); // false

li2 = Array.from(li2); // Array
Array.isArray(li2); // true

/* 
Array.of()
Array()
new Array()
Verifica se o valor passado é uma array e retorna um valor booleano.
A palavra chave new não é necessária para utilizar o construtor Array.
*/
Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1, 2, 3, 4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1, 2, 3, 4]

/* Propriedades e Métodos do Prototype
[].length retorna o tamanho do array.
*/
const frutas = ["Banana", "Pera", ["Uva Roxa", "Uva Verde"]];
frutas.length; // 3
frutas[0].length; // 6
frutas[1].length; //4
frutas[2].length; // 2
frutas[2][0].length; // 8

/* Métodos e Modificadores [].sort()
Os próximos métodos que vamos falar sobre, são metodos modificadores (mutator methods).
Além de retornarem um valor, eles modificam a array original.
[].sort() organizada pelo unicode.
*/
instrumentos = ["Guitarra", "Baixo", "Violão", "Cavaquinho"];
instrumentos.sort();
console.log(instrumentos); // ["Baixo", "Cavaquinho", "Guitarra", "Violão"]

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort(); // em numeros ele vai caractere por caractere, por isso que o 8 ficou no final
console.log(idades); // [1, 12, 21, 32, 33, 43, 8]

/* [].unshift() e [].push()
[].unshift()  -- adiciona elementos ao inicio da array e retorna o length da mesma.
[].push() -- adiciona elementos ao final da array e retorna o length da mesma.
*/
const carros3 = ["Ford", "Fiat", "VW"];
carros3.unshift("Honda", "Kia"); // 5
console.log(carros3); //   ["Honda", "Kia", "Ford", "Fiat", "VW"]

carros3.push("Ferrari"); // 6
console.log(carros3); // ["Honda", "Kia", "Ford", "Fiat", "VW", "Ferrari"]

/* [].shift() e [].pop()
[].shift() -- remove o primeiro elemento da array e retorna o mesmo.
[].pop() -- remove o último elemento da array e retorna o mesmo.
*/
const carros4 = ["Ford", "Fiat", "VW", "Honda"];
const primeiroCarro = carros4.shift();
console.log(primeiroCarro); // Ford
console.log(carros4); // ["Fiat", "VW", "Honda"]

const ultimoCarro = carros4.pop();
console.log(ultimoCarro); // Honda
console.log(carros4); // ["Fiat", "VW"]

/* [].reverse()
[].reverse() -- inverte os itens da array e retorna a nova array.
*/
const carros5 = ["Ford", "Fiat", "VW", "Honda"];
carros5.reverse(); // ["Honda", "VW", "Fiat", "Ford"]

/* [].splice()
[].splice(index, remover, item1, item2, ...)  -- adiciona valores na array a partir
do index. Remove a quantidade de itens que for passada no segundo parametro (retorna esses itens que foram removidos)
*/
console.log(" ");
const carros6 = ["Ford", "Fiat", "VW", "Honda"];
carros6.splice(1, 0, "Kia", "Mustang"); // []
carros6; // ["Ford", "Kia", "Mustang", "Fiat", "VW", "Honda"]

carros6.splice(3, 2, "Ferrari"); // ["Fiat", "VW"]
carros6; // ["Ford", "Kia", "Mustang", "Ferrari", "Honda"]

/* [].copyWithin()
[].copyWithin(alvo, inicio, final) -- a partir do alvo, ele irá copiar a array começando
do inicio até a final e vai preencher a mesma com essa cópia. Caso omita os valores de inicio
e final, ele irá utilizar como inicio o 0 e final o valor total da array.
*/
["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3); // ["Item1", "Item2", "Item1", "Item2"]
["Item1", "Item2", "Item3", "Item4"].copyWithin(-1); // ["Item1", "Item2", "Item3", "Item1"]

/* [].fill()
[].fill(valor, inicio, final) -- preenche a array com o valor, do inicio até o fim.
*/
["Item1", "Item2", "Item3", "Item4"].fill("Banana"); // ["Banana", "Banana", "Banana", "Banana"]
["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2); // ["Item1", "Item2", "Banana", "Banana"]
["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3); // ["Item1", "Banana", "Banana", "Item4"]

/* Métodos de Acesso
Os métodos abaixo não modificam a array original, apenas retornam uma array
modificada.
[].concat() -- irá concatenar a array com o valor passado.
*/
const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
console.log(transportes); // ["Barco", "Aviao", "Carro", "Moto"]

const maisTransportes = [].concat(transporte1, transporte2, "Van");
console.log(maisTransportes); // ["Barco", "Aviao", "Carro", "Moto", "Van"]

/* [].includes(), []indexOf(), e [].lastIndexOf()
[].includes(valor) -- verifica se a array possui o valor e retorna true e false.
[].indexOf(valor) -- verifica se a array possui o valor e retorna o index do primeiro valor na array.
[].lastIndexOf(valor) -- retorna o index do último.
*/
const linguagens = ["html", "css", "js", "php", "python", "js"];
linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5

/* [].join()
[].join(separador) -- junta todos os valores da array e retorna uma string com eles.
Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da 
array.
*/
let linguagens2 = ["html", "css", "js", "php", "python", "js"];
linguagens2.join(); // "html,css,js,php,python,js"
linguagens2.join(" "); // "html css js php python js"
linguagens2.join(""); // "htmlcssjsphppythonjs"
linguagens2.join("-_-"); // "html-_-css-_-js-_-php-_-python-_-js"

let htmlString = "<h2>Titulo Principal</h2>";
htmlString = htmlString.split("h2");
console.log(htmlString); // ["<", ">Titulo Principal</", ">"]

htmlString = htmlString.join("h1");
console.log(htmlString); // <h1>Titulo Principal</h1>

/* [].slice()
[].slice(inicio,final) -- retorna os itens da array começando pelo inicio e indo até o 
valor de final.
*/
let linguagens3 = ["html", "css", "js", "php", "python", "js"];
linguagens3.slice(3); // ["php", "python", "js"]
linguagens3.slice(1, 4); // ["css", "js", "php"]

const cloneLinguagens = linguagens3.slice();
console.log(cloneLinguagens); // ["html", "css", "js", "php", "python", "js"]

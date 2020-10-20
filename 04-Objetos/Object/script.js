/* Object
Todo objeto criado com o constructor Object e por isso herda as propriedades e métodos do seu prototype.
*/

const carro = {
  marca: "Ford",
  ano: 2018,
};

const pessoa = new Object({
  nome: "Alex",
  idade: 38,
});

/*  Métodos de Object
Object.create(obj, defineProperties)
retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
*/
const carro2 = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro2);
console.log(honda.init("Honda").acelerar());
console.log(honda.init("Chevrolet").buzinar());

/* Object.assign()
Object.assign(alvo, obj1, obj2)
Adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos.
O assign irá modificar o objeto alvo.
*/
const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carro3 = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(carro3, funcaoAutomovel);
console.log(moto);
console.log(carro3);

/* Object.defineProperties()
Object.defineProperties(alvo, propriedades)
Adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas
as caracteristicas dessas propriedades.
*/
const moto2 = {};
Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudar de valor
    enumerable: true, // torna enumeravel
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede a mudança de valor
  },
});

/* get e set
É possivel definirmos diferentes comportamentos para get e set de uma propriedade.
Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos obj.propriedade = 'xyz' a função de set é ativada.
*/

const moto3 = {};
Object.defineProperties(moto3, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = "Velocidade " + valor;
    },
  },
});

moto3.velocidade = 200;
console.log(moto3);

/* Object.getOwnPropertyDescriptors(obj)
Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
*/
Object.getOwnPropertyDescriptor(Array); // Lista todos os métodos e propriedades e Array

Object.getOwnPropertyDescriptor(Array.prototype); // Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight"); // Puxa de uma única propriedade

/* Object.keys(obj)
   Object.values(obj)
   Object.entries(obj)

   Object.keys(obj) -- retorna uma array com as chaves de todas as propriedades diretas e unumeraveis do objeto.
   Object.values(obj) -- retorna uma array com os valores do objeto.
   Object.entries(obj) -- retorna uma array com array's contendo a chave e o valor.
*/

Object.keys(Array); // [] vazia, pois não possui propriedades enumeráveis

const carro4 = {
  marca: "Ford",
  ano: 2018,
};

Object.keys(carro4); // ["marca", "ano"]

Object.values(carro4); // ["Ford", 2018]

Object.entries(carro4); // [['marca', 'Ford'], ['ano', 2018]]

/* Object.getOwnPropertyNames(obj)
Retorna uma array com todas as propriedades diretas do objeto
(não retorna as do protótipo)
*/
Object.getOwnPropertyNames(Array); // ["length", "name", "prototype", "isArray", "from", "of"]

Object.getOwnPropertyNames(Array.prototype); // "length", "constructor", "concat", "copyWithin", "fill" .....]

const carro5 = {
  marca: "Ford",
  ano: 2019,
};

Object.getOwnPropertyNames(carro); // ['marca', 'ano']

/* Object.getPrototypeOf() e Object.is()
Object.getPrototypeOf() -- retorna o protótipo do objeto.
Object.is(obj1, obj2) -- verifica se os objetos são iguais e retorna true ou false.
*/
const frutas = ["Banana", "Pera"];
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(""); // String

const frutas1 = ["Banana", "Pera"];
const frutas2 = ["Banana", "Pera"];

Object.is(frutas1, frutas2); // false

/* Object.freeze(), Object.seal(), Object.preventExtensions()
Object.freeze() -- impede qualquer mudança nas propriedades.
Object.seal() -- previne adiçao de novas propriedades e impede que as atuais sejam deletadas.
Object.preventExtensions() -- previne a adição de novas propriedades
*/
const carro6 = {
  marca: "Hyndai",
  ano: 2017,
};

Object.freeze(carro6);
Object.seal(carro6);
Object.preventExtensions(carro6);

Object.isFrozen(carro6); // true
Object.isSealed(carro6); // true
Object.isExtensible(carro6); // false

/* PROPRIEDADES E MÉTODOS DO PROTÓTIPO
Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponiveis 
em todos os objetos criados a partir de funções construtoras.
{}.constructor retorna a função construtora do objeto.
*/
const frutas3 = ["Banana", "Uva"];
frutas3.constructor; // Array

const frase = "Isso é uma frase";
frase.constructor; // String

/* 
().hasOwnProperty('prop') 
().propertyIsEnumerable('prop')
Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto
e não do protótipo.
O {}.propertyIsEnumerable() -- verifica se a propriedade pe enumeravel.
*/
const frutas4 = ["Banana", "Maça"];
frutas4.hasOwnProperty("map"); //false
Array.hasOwnProperty("map"); // false
Array.prototype.hasOwnProperty("map"); // true

Array.prototype.propertyIsEnumerable("map"); // false
window.propertyIsEnumerable("innerHeight"); // true

/* 
{}.isPrototypeOf(valor)
Verifica se é o prototipo do valor passado.
*/
const frutas5 = ["Banana", "Uva"];
Array.prototype.isPrototypeOf(frutas5); // true

/*
{}.toString()
Retorna o tipo de objeto.
O problema é toString() ser uma função dos protótipos de Array, String e mais.
Por isso é comum utilizarmos a função direto do 
Object.prototype.toString.call(valor)
*/
const frutas6 = ["Banana", "Uva"];
frutas6.toString(); // "Banana,Uva"
typeof frutas6; // "object"
Object.prototype.toString.call(frutas6); // "[object Array]"

const frase2 = "Isso é um exemplo de frase";
frase2.toString(); // "Isso é um exemplo de frase"
typeof frase2; // "string"
Object.prototype.toString.call(frase2); // "[object String]"

const carro7 = { marca: "Hyundai" };
carro7.toString(); // "[object Object]"
typeof carro7; // "object"
Object.prototype.toString.call(carro7); // "[object Object]"

/* Prototype
A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
*/

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const alex = new Pessoa("Alex", 38);
console.log(Pessoa.prototype); // retorna o objeto
console.log(alex.prototype); // retorna undefined

/* funcao.prototype
É possivel adicionar novas propriedades e métodos ao objeto prototype.
*/

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};
Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};
console.log(Pessoa.prototype); // retorna o objeto

/* Acesso ao Protótipo
O objeto criado utilizando o construtor, possui acesso ao métodos e propriedades 
do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.
*/
alex.nome;
alex.idade;
alex.andar();
alex.nadar();

/* proto
O novo objeto acessa os métodos e propriedades do protótipo através da 
propriedade __proto__ 
É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.
*/
// Acessam o mesmo método mas __proto__ não terá acesso ao this.nome
alex.andar(); // alex andou
alex.__proto__.andar(); // undefined andou

/* Herança de Protótipo
O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsavel 
por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas
são herdades do protótipo de Object.
*/
Object.prototype;
alex.toString();
alex.isPrototypeOf();
alex.valueOf();

/* Construtores Nativos
Objetos, funções, números, strings e outros tipos de dados são criados utilizando
construtores. Esses construtores possuem um protótipo com propriedades e métodos, que 
poderão ser acessadas pelo tipo de dado.
*/
const pais = "Brasil";
const cidade = new String("Batatais");
pais.charAt(0); // "B"
cidade.charAt(4); // "t"
String.prototype;

/* É possui acessar a função do protótipo
É comun, principalmente em códigos mais antigos, o uso direto de funções do protótipo
do construtor Array.
Obs. Existe o método Array.from()
*/
const lista = document.querySelectorAll("li");
// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

/* Método do Objeto vs Protótipo
Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao 
protótipo.
Obs. dado.construtor.name, retorna o nome do construtor
*/
Array.prototype.slice.call(lista);
Array.from(lista); // metodo mais utilizado

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// Apenas os Métodos do Protótipo são herdados
[1, 2, 3].slice(); // existe
//[1, 2, 3].from(); // não existe

/* Entenda o que está sendo retornado.
Os métodos e propriedades acessado com o . são referentes ao tipo de dados que 
é retornado antes desse .
*/
const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // Object
Carro.marca; // String
Carro.preco; // String
Carro.acelerar; // Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String

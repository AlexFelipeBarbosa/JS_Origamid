/*  Objetos
Conjunto de variaveis e funções, que são chamadas de propriedades e metodos.
Propriedades e metodos consistem em: nome (chave) e valor
*/

var pessoa = {
  nome: "Alex",
  idade: 38,
  profissao: "Programador",
  possuiFaculdade: true,
};

console.log(pessoa.nome);
console.log(pessoa.possuiFaculdade);

/* Métodos
É uma propriedade que possui uma função no local do seu valor.
*/
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados);
console.log(quadrado.area(3));
console.log(quadrado.perimetro(5));

/* Existe uma abreviação para criar um método
Abreviação de area: function() {}  para    area(){} 
no ES6+
*/
var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};
console.log(quadrado2.area(4));
console.log(quadrado2.perimetro(6));

/* Organizar o código
Objetos servem para organizar o código em pequenas partes reutilizaveis.
Já percebeu que console é um objeto e log() um metodo?
*/
// Math é um objeto nativo de JavaScript.
console.log(Math.PI); // 3.141592653589793
console.log(Math.random()); // gerar um número aleatório. De 0 (zero) a 1 (um)

var pi = Math.PI;
console.log(pi);

/* Palavra-chave: this
this irá fazer uma referencia ao proprio objeto.
*/
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};
// Sem o this na linha 68 o JS iria pegar o 120 da linha 63 e retornar 60.
// Neste caso utilizando o this ele pegou o 50 da linha 66.
console.log(menu.metadeHeight()); // 25

/* Protótipo e Herança 
O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
*/
var menu = {
  width: 800,
};
// hasOwnProperty é um método de object
console.log(menu.hasOwnProperty("width")); // true
console.log(menu.hasOwnProperty("height")); // false

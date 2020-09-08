/* Objetos
Criar um objeto é simples, basta defirnirmos uma variavel e iniciar a definição do seu
valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas caracteristicas
do anterior?
*/
const carro = {
  marca: "Marca",
  preco: 0,
};

const honda = carro;
honda.marca = "Honda";
honda.preco = 4000;

const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 3000;

console.log(carro); // {marca: "Fiat", preco: 3000}
console.log(honda); // {marca: "Fiat", preco: 3000}
console.log(fiat); // {marca: "Fiat", preco: 3000}
// os 3 estão com o mesmo valor.

console.log(" ");
/* Constructor Functions (função construtora)
Para isso existem as Constructor Functions, ou seja, Funções Constrututoras que são responsaveis por construir novos objetos sempre que chamamos a mesma.
*/
function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

const chevrolet = new Carro();
chevrolet.marca = "Chevrolet";
chevrolet.preco = 4000;

const hyundai = new Carro();
hyundai.marca = "Hyundai";
hyundai.preco = 5000;

console.log(chevrolet); // Carro {marca: "Chevrolet", preco: 4000}
console.log(hyundai); //  Carro {marca: "Hyundai", preco: 5000}

/* new Keyword
A palavra chave new é responsavel por criar um novo objeto baseado na função
que passarmos a frente dela.

const honda = new Carro();
1 - Cria um novo objeto
honda = {};
2 - Define o protótipo
honda.prototype = Carro.prototype;
3 - Aponta a variavel this para o objeto
this = honda;
4 - Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;
5 - Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}
*/

/* Parametros e Argumentos
Podemos passar argumentos que serão utilizados no momento da criação do objeto.
*/
function Carro2(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}
const honda2 = new Carro2("Honda", 7000);
const fiat2 = new Carro2("Fiat", 6000);

/* this Keyword
O this faz referência ao proprio objeto construido com a Constructor Function.
Obs. Variaveis dentro da Constructor estão "protegidas".
*/
function Carro3(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}
const honda3 = new Carro3("Hyndai", 1000);
console.log(honda3);

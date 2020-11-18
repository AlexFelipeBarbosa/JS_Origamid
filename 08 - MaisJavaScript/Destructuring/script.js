/* Destructuring
Permite a desestruturação de Arrays e Objetos, atribuindo suas propriedades à novas variáveis.
*/
const carro = {
  marca: "Fiat",
  ano: 2018,
  portas: 4,
};

const { marca, ano } = carro;
console.log(marca); // Fiat
console.log(ano); // 2018

/* Destructuring Objects
A desestruturação irá facilitar a manipulação de dados.
Principalmente quando temos uma grande profundidade de objetos.
*/
const cliente = {
  nome: "Alex",
  compras: {
    digitais: {
      livros: ["Livro1", "Livro2"],
      videos: ["Video JS", "Video Node"],
    },
    fisicas: {
      cadernos: ["Caderno1"],
    },
  },
};

console.log(cliente.compras.digitais.livros); // ["Livro1", "Livro2"]
console.log(cliente.compras.digitais.videos); // ["Video JS", "Video Node"]

const { livros, videos } = cliente.compras.digitais;

console.log(livros); // ["Livro1", "Livro2"]
console.log(videos); // ["Video JS", "Video Node"]

/* Nesting
É possivel aninhar uma desestruturação dentro de outra.
*/
const cliente2 = {
  nome: "Alex",
  compras: {
    digitais: {
      livro: ["Livro1", "Livro2"],
      video: ["Video JS", "Video Node"],
    },
    fisicas: {
      cadernos: ["Caderno1"],
    },
  },
};

const {
  fisicas,
  digitais,
  digitais: { livro, video },
} = cliente2.compras;

console.log(fisicas);
console.log(livro);
console.log(video);
console.log(digitais);

/* Nome das Variáveis
É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto.
É possivel mudar o nome da variavel final com:
*/

const cliente3 = {
  nome: "Alex",
  compras: 10,
};
const { nome, compras } = cliente3;
// mudando o nome das variáveis
const { nome: nomeCliente, compras: comprasCliente } = cliente3;

/* Valor Inicial
Caso a propriedade não exista o valor padrão dela será undefined.
É possivel modificar este valor no momento da desestruturação.
*/
const cliente4 = {
  nome: "Alex",
  compras: 10,
};

const {
  nome: nomeCliente4,
  compras: comprasCliente4,
  email = "email@email.com",
  cpf,
} = cliente4;
console.log(email); // email@email.com
console.log(cpf); // undefined

/* Destructuring Arrays
Para desestruturar array's você deve colocar as variáveis entre [] colchetes.
*/
const frutas = ["Banana", "Uva", "Morango"];
const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

console.log(primeiraFruta);
console.log(segundaFruta);
console.log(terceiraFruta);

// Com destructuring
const [primeira, segunda, terceira] = frutas;

/* Declaração de Variáveis
A desestruturação pode servir para declararmos uma sequencia de variaveis.
*/
const primeiro = "Item1";
const segundo = "Item2";
const terceiro = "Item3";
// ou
const [primeiro1, segundo1, terceiro1] = ["Item1", "Item2", "Item3"];

/* Argumento Desestruturado
Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração.
*/
function handleKeyboard(event) {
  console.log(event.key);
}

// Com destructuring
function handleKeyboard1({ key }) {
  console.log(key);
}

document.addEventListener("keyup", handleKeyboard1);

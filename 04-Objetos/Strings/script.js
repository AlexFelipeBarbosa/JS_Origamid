console.log(" --------------------------- ");

/* String 
É a construtora de strings, toda string possui as propriedades e métodos 
do prototype de String.
*/

const comida = "Pizza";
const liquido = new String("Agua");
const ano = new String(2020);

/* str.length
Propriedade com o total de caracteres da string.
*/
const frase = "A melhor pizza";

comida.length; //5
frase.length; // 14
comida[0]; // P
frase[0]; // A
frase[frase.length - 1]; // a

/* str.charAt(n)
Retorna o caractere de acordo com o index de (n)
*/
const linguagem = "JavaScript";
linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

/* str.concat(str2, str3...)
Concatena as strings e retorna o resultado.
*/
const frase2 = "A melhor linguagem é ";
const linguagem2 = "JavaScript";
const fraseCompleta = frase2.concat(linguagem2, "!!"); // "A melhor linguagem é JavaScript!!"

/* str.includes(search, position)
Procura pela string exata dentro de outra string. 
A procura é case sensitive.
*/
const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

/* str.endsWith(search) e str.startWith(search)
Procura pela string exata dentro de outra string.
A procura é case sensitive.
*/
const fruta2 = "Banana";
fruta2.endsWith("nana"); // true
fruta2.startsWith("Ba"); // true
fruta2.startsWith("ba"); // false (lembrando que é case sensitive)

/* str.slice(start, end)
Corta a string de acordo com os valores de start e end
*/
const transacao1 = "Deposito do cliente";
const transacao2 = "Deposito do fornecedor";
const transacao3 = "Taxas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // osi

/* str.substring(start, end)
Corta a string de acordo com os valores de start e end.
Não funciona com valores negativos como o slice
*/
const linguagem3 = "JavaScript";
linguagem3.substring(3, 5); // aS
linguagem3.substring(0, 4); // Java
linguagem3.substring(4); // Script
linguagem3.substring(-3); // JavaScript

/* str.indexOf(search) e str.lastIndexOf(search)
Retorna o index da string, assim que achar o primeiro resultado ele já retorna.
No caso do lastIndexOf ele retorna o último resultado.
*/
const instrumento = "Cavaquinho";
instrumento.indexOf("a"); // 1
instrumento.lastIndexOf("a"); // 3
instrumento.indexOf("va"); // 2

/* str.padStart(n,str) e str.padEnd(n,str)
Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres.
O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
*/
const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // ".....R$ 99"
listaPrecos[0].padEnd("10", "."); // "R$ 99....."

/* str.repeat(n)
Repete a string (n) vezes
*/
const frase3 = "Ta";
console.log(frase3.repeat(7)); // TaTaTaTaTaTaTa

/* str.replace(regexp|substr, newstr|function)
Troca parte da string por outra. Podemos utilizar uma regular expression ou um
valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
*/
let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", "); // "Camisas, Bonés, Calças, Bermudas, Vestidos, Saias"

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // "R$ 1200.43"

/* str.split(padrao)
Divide a string de acordo com o padrão passado e retorna uma array.
Obs. join é um metodo de array
*/
const listaItens2 = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens2.split(" ");
console.log(arrayItens);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
console.log(htmlArray);
const htmlNovo = htmlArray.join("section");
console.log(htmlNovo);

/* str.toLowerCase() e str.toUpperCase()
Retorna a string em letras maiusculas ou minusculas. 
Bom para verificarmos input de usuarios.
*/
const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";
sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true

sexo1.toUpperCase() === "FEMININO"; // true

/* str.trim(), str.trimStart(), str.trimEnd()
Remove espaço em branco do inicio ou final de uma string.
*/
const valor = "      R$ 23.00     ";
valor.trim(); // "R$ 23.00"
valor.trimStart(); // "R$ 23.00     "
valor.trimEnd(); // "      R$ 23.00"

/* Fetch API
Permite fazermos requisições HTTP através do método fetch()
Este método retorna a resolução de uma Promise.
Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do
tipo Response.
*/
fetch("./arquivo.txt").then(function (response) {
  console.log(response); // Response HTTP (Objeto)
});

/* Response
O objeto Response, possui um corpo com o conteudo da resposta.
Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response.
Estes retornam outras promises.
*/
fetch("./arquivo.txt")
  .then((response) => {
    return response.text();
  })
  .then((corpo) => {
    console.log(corpo); // conteudo do arquivo.txt
  });

/* Servidor Local
 o fetch faz uma requisição HTTP/HTTPS.
 Se você iniciar um site local diretamente pelo index.html, sem um servidor local o 
 fetch não irá funcionar.
Obs.: Se dermos um espaço após o objeto ou pularmos linha, o método continua funcionando.
  */
fetch("c:/files.arquivo.txt")
  .then((response) => {
    return response.text();
  })
  .then((corpo) => {
    console.log(corpo); // irá ocorrer um erro.
  });

/* .json()
 Um tipo de formato de dados muito utilizado com JavaScript é o JSON(JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto .js
 .json() transforma um corpo em json em um objeto JavaScript.
 */
fetch("https://viacep.com.br/ws/01001000/json/")
  .then((response) => response.json())
  .then((cep) => {
    console.log(`Logradouro: ${cep.logradouro}  - Bairro: ${cep.bairro}`);
  });

/* .text()
Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.
*/
const styleElement = document.createElement("style");

fetch("./style.css")
  .then((response) => response.text())
  .then((style) => {
    styleElement.innerHTML = style;
    document.body.appendChild(styleElement);
  });

/* HTML e .text()
  Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com innerHTML.
  A partir dai podemos manipular esses dados como um DOM qualquer.
  */
const div = document.createElement("div");

fetch("./sobre.html")
  .then((response) => response.text())
  .then((htmlBody) => {
    div.innerHTML = htmlBody;
    const titulo = div.querySelector("h1");
    console.log(titulo);
    document.querySelector("h1").innerText = titulo.innerText;
  });

/* .blob()
  Um blob é um tipo de objeto utilizado para representação de dados de um arquivo.
  O blob pode ser utilizado para transformarmos requisições de imagens por exemplo.
  O blob gera um url único.
  */
const div2 = document.createElement("div");

fetch("./imagem.png")
  .then((response) => response.blob())
  .then((imgBlob) => {
    const blobUrl = URL.createObjectURL(imgBlob);
    console.log(blobUrl); // http://127.0.0.1:5500/6d6f8622-264f-4943-b7cb-61cd5667914f
  });

/* .clone()
  Ao utilizarmos os métodos acima, text, json e blob a resposta é modificada.
  Por isso existe um método clone, caso você necessite transformar uma resposta em diferentes valores.
  */
const div3 = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
  const cloneResponse = response.clone();
  response.json().then((json) => {
    console.log(json);
  });
  cloneResponse.text().then((text) => {
    console.log(text);
  });
});

/* .headers
É uma propriedade que possui os cabeçalhos da requisição.
É um tipo de dados iterável então podemos utlizar o forEach para vermos cada um deles.
*/
const div4 = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json").then((response) => {
  response.headers.forEach(console.log);
});

/* .status e .ok
Retorna o status da requisição.
Se foi 404, 200, 202 e mais.
ok --> retorna um valor booleano sendo true para cada requisição de sucesso e false para uma sem sucesso.
*/

const div5 = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
  console.log(response.status, response.ok);
  if (response.status === 404) {
    console.log("Pagina não encontrada");
  }
});

/* .url e .type
.url --> retorna o url da requisição.
.type --> retorna o tipo da resposta.
*/
const div6 = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
  console.log(response.type, response.url);
});

/* types:
basic: feito na mesma origem
cors: feito em url body pode estar disponivel
error: erro de conexão
opaque: no-cors, não permite acesso de outros sites
*/

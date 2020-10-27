/* JSON
JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. As aspas duplas são obirgatórias, tanto na chave quanto no valor quando este for uma string.
*/

/*
{
  "id": 1,
  "nome": "Alex",
  "email": "meuemail@mail.com"
}
*/

/* Valores
Os valores podem ser números, strings, boolean, arrays, objetos e null
*/

/*
{
  "id": 1,
  "faculdade": true,
  "pertences": [
    "lapis",
    "caneta",
    "caderno"
  ],
  "endereco": {
    "cidade": "Rio de Janeiro",
    "pais": "Brasil"
  },
  "casado": null
}
*/

/* Arrays e Objetos
É comum possuirmos array's com objetos em cada valor da arrat.
Cuidado para não colocar virgula no último item do objeto ou array.
*/

fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => {
    console.log(json);
  });

// Mostrar somente a matéria
fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => {
    json.forEach((materia) => {
      console.log(materia.aula);
    });
  });

/* JSON.parse() e JSON.stringify()
  JSON.parse() --> irá transformar um texto JSON em um objeto JavaScript.
  JSON.stringify() --> irá transformar um objeto JavaScript em uma string no formato JSON
  */
const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25 minutos"}';
const textoOBJ = JSON.parse(textoJSON);

console.log(textoOBJ);

const enderecoOBJ = {
  cidade: "Batatais",
  rua: "Rua dos Desenvolvedores Anonimos",
  numero: 171,
  pais: "Brasil",
};

const enderecoJSON = JSON.stringify(enderecoOBJ);

console.log(enderecoJSON);

/* Exemplo Real
Podemos guardar por exemplo no localStorage, uma string como valor de uma propriedade.
E retornar essa string como objeto.
*/
const configuracoes = {
  player: "Google API",
  tempo: 25.5,
  aula: "2-1 JavaScript",
  vitalicio: true,
};

localStorage.configuracoes = JSON.stringify(configuracoes);
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);

console.log(pegarConfiguracoes);

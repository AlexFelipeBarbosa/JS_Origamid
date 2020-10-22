/* Promise
Promise é uma função construtora de promessas. Existem dois resultados possiveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.
*/

const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve();
  } else {
    reject();
  }
});

console.log(promessa); // Promise {<fulfilled>: undefined}

/* resolve()
Podemos passar um argumento na função resolve().
Este será enviado junto com a resolução da Promise.
*/
const promessa2 = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject();
  }
});

console.log(promessa2); // Promise {<fulfilled>: "Estou pronto!"}

/* reject()
Quando uma condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.
*/
const promessa3 = new Promise(function (resolve, reject) {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});
console.log(promessa3); // Promise {<rejected>: Error: Um erro ocorreu.

/* then()
O poder das Promises está no método then() do seu protótipo.
O Callback deste método só será ativado quando a promise for resolvida.
O argumento do callback será o valor passado na função resolve.
*/
const promessa4 = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu"));
  }
});

promessa4.then(function (resolucao) {
  console.log(resolucao); // Estou pronto!
});

/* Assincrono
As promises não fazem sentido quando o código executado dentro da mesma é apenas código sincrono. O poder está na execução de código assincrono que executará 
o resolve() ao final dele.
*/
const promessa5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolvida!");
  }, 5000);
});

promessa5.then((resolucao) => {
  console.log(resolucao); // resolvida após 5 segundos
});

/* then().then()
O método then() retorna outra Promise. 
Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.
*/
const promessa6 = new Promise((resolve, reject) => {
  resolve("Etapa 1");
});

promessa6
  .then((resolucao) => {
    console.log(resolucao); // Etapa 1
    return "Etapa 2";
  })
  .then((resolucao) => {
    console.log(resolucao); // Etapa 2
    return "Etapa 3";
  })
  .then((r) => r + 4)
  .then((r) => {
    console.log(r); // Etapa 34
  });

/* catch()
 O método catch(), do protótipo de Promises, adiciona um callback que será ativado caso a mesma seja rejeitada.
 */
const promessa7 = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Deu erro aqui!"));
  }
});

promessa7
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    console.log(rejeitada); // Error: Deu erro aqui!
  });

/* then(resolve, reject)
Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método then, como segundo argumento.
 */
const promessa8 = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu aqui!"));
  }
});

promessa8.then(
  (resolucao) => {
    console.log(resolucao);
  },
  (rejeitada) => {
    console.log(rejeitada);
  }
);

/* finally()
finally() executará a função anonima assim que a promessa acabar.
A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.
*/
const promessa9 = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

promessa9
  .then(
    (resolucao) => {
      console.log(resolucao);
    },
    (rejeitada) => {
      console.log(rejeitada);
    }
  )
  .finally(() => {
    console.log("Acabou");
  });

/* Promise.all()
Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. 
A resposta é uma array com as respostas de cada promise.
 */
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login Efetuado!");
  }, 3000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados!");
  }, 5000);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then((respostas) => {
  console.log(respostas); // ["Login Efetuado!", "Dados carregados!"]
});

/* Promise.race()
Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.
*/
const login1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login realizado com sucesso!");
  }, 3000);
});

const dados1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados com sucesso!");
  }, 5000);
});

const carregouPrimeiro = Promise.race([login1, dados1]);

carregouPrimeiro.then((resposta) => {
  console.log(resposta); // Login realizado com sucesso!
});

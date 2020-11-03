/* Async / await
A palavra chave async indica que a função possui partes assincronas e que você pretend esperar a resolução da mesma antes de continuar.
O await irá indicar a promise que devemos esperar. 
Faz parte do ES8.
*/

async function puxarDados() {
  const dadosResponse = await fetch("./dados.json");
  const dadosResponse2 = await fetch("./clientes.json");

  const dadosJSON = await dadosResponse.json();
  const dadosJSON2 = await dadosResponse2.json();

  document.body.innerText = dadosJSON.aula + " " + dadosJSON2.nome;
}

puxarDados();

/* then / async
A diferença é uma sintaxe mais limpa.
*/

function iniciarFetch() {
  fetch("./dados.json")
    .then((dadosResponse) => dadosResponse.json())
    .then((dadosJSON) => {
      document.body.innerText = dadosJSON.aula;
    });
}

iniciarFetch();

async function iniciarAsync() {
  const dadosResponse = await fetch("./dados.json");
  const dadosJSON = await dadosResponse.json();
  document.body.innerText = dadosJSON.aula;
}

iniciarAsync();

/* Try / Catch
Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.
*/
async function puxarDados() {
  try {
    const dadosResponse = await fetch("./dados.json");
    const dadosJSON = await dadosResponse.json();
    console.log(dadosJSON.aula);
    document.body.innerText = dadosJSON.aula;
  } catch (erro) {
    console.log(erro);
  }
}

puxarDados();

/* Iniciar Fetch ao mesmo tempo
Não precisamos esperar um fetch terminar para começarmos outro.
Porem precisamos esperar a resposta resolvida do fetch para transformarmos a response em JSON.
*/

async function rodarAsync() {
  const dadosResponse = fetch("./dados.json");
  const clientesResponse = fetch("./clientes.json");

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();

  console.log(dadosJSON);
  console.log(clientesJSON);
}

rodarAsync();

/* Promise
O resultado da expressão à frente de await tem que uma promise.
E o retorno do await será sempre o resultado dessa promise.
*/

async function asyncSemPromise() {
  // console não irá esperar
  await setTimeout(() => console.log("Depois de 3s"), 3000);
  console.log("Acabou");
}

asyncSemPromise();

async function asyncComPromise() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
  console.log("Depois de 1s");
}

asyncComPromise();

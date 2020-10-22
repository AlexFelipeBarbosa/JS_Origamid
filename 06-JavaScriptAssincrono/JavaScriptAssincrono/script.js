/* Síncrono vs Assincrono

--> Sincrono -- Espera a tarefa acabar para continuar com a proxima.
--> Assincrono -- Move para a proxima tarefa antes da anterior acabar.
O trabalho será executado no 'fundo' e quando terminado, será colocado na fila (Task Queue)

Exemplos:
setTimeout, Ajax, Promisses, Fetch, Async
*/

setTimeout(function () {
  console.log("Time 1");
});

setTimeout(function () {
  console.log("Time 2");
}, 10000);

console.log("Log 1");

setTimeout(function () {
  console.log("Time 3");
}, 5000);

console.log("Log 2");

/* --> Retorno do Console.
Log 1
Log 2
Time 1
Time 3
Time 2
*/

/* VANTAGENS
--> Carregamento no Fundo
  Não trava o script. É possivel utilizar o site enquanto o processamento é realizado no fundo.

--> Função ao termino (callback)
  Podemos ficar de olho no carregamento e executar uma função assim que ele terminar.
  
--> Requisições ao Servidor
  Não precisamos recarregar a pagina por completo à cada requisição feita no servidor.  
*/

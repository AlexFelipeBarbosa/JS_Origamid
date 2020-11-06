/* History
É possivel acessarmos o histórico de acesso do browser em uma sessão especifica através do window.history.
O objeto history possui diferentes métodos e propriedades.
*/
window.history;
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a proxima

console.log(window.history);

/* pushState()
A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item.

wimdow.history.pushState(obj, title, url)

Em obj podemos enviar um objeto com dados, mas o seu uso é restrito por isso geralmente utilizamos null.
O title ainda é ignorado por alguns browsers, também utilizamos null nele.
O url que é a parte importante.
*/
window.history.pushState(null, null, "sobre.html");

/* popstate
o evento popstate pode ser adicionado ao objeto window.
Assim podemos executar uma função toda vez que o usuario clicar no botão de voltar ou próximo.
*/
window.addEventListener("popstate", () => {
  fetchPage(window.location.pathname);
});

/* Fetch e History
Ao puxarmos dados via fetch api, o url da pagina continua o mesmo.
Ao combinar fetch com a history api conseguimos simular uma navegação real entre paginas, sem a necessidade de recarregamento da mesma.
*/
async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  window.history.pushState(null, null, url);
}

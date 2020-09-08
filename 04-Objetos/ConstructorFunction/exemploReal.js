/* Exemplo Real
Quando mudamos a propriedade seletor, o objeto DOM irá passar a selecionar 
o novo seletor em seus metodos.
*/
/*
const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add("ativo");
  },
};

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = "ul";
Dom.ativo(); // adiciona ativo ao ul

*/

/* Transformando em função "construtora"
 Constructor Function Real
 Um objeto criado com uma Constructor, não irá influenciar em outro objeto
 criado com a mesma constructor. 
 Obs. Lembre-se de usar parâmetros
 */
function Dom(seletor) {
  (this.element = function () {
    return document.querySelector(seletor);
  })(
    (this.ativar = function (classe) {
      this.element().classList.add(classe);
    })
  );
}

const li = new Dom("li");
li.ativar("ativo");
const ul = new Dom("ul");
ul.ativar("ativo");
const lastLi = new Dom("li:last-child"); // ultimo item da li
lastLi.ativar("ativo");

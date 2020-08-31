console.log(" ");
console.log("Exercicios!");
console.log(" ");

// Retorne o url da pagina atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Selecione o primeiro elemento da pagina que possua classe ativo.
const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura);

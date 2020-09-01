console.log("------------------------------------------- ");
console.log("Exercicios");
console.log("--------------------------------------------");

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remova a classe ativo de todos os itens do menu e mantenha apenas
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo"); // adicionando apenas ao primeiro

// Verifique se as imagens possuem atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo do menu
const link = document.querySelector('a[href^="http"]');
console.log(link);
link.setAttribute("href", "https://www.google.com/");
console.log(link);

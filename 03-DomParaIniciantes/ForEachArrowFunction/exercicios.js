console.log("-------------------------- ");
console.log("Exercicios");
console.log(" ");

// Mostre no console cada paragrafo do site.
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});
console.log("---------------------------");
// Mostre o texto dos paragrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

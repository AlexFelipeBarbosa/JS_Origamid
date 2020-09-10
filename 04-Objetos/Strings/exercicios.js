console.log("Exercicios ----------");
console.log(" ");

// Utilizando o forEach na array abaixo, some os valores de taxa e os valores de recebimento.
const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", ""); // O + converte para number
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += numeroLimpo;
  } else if (item.descricao.slice(0, 4) === "Rece") {
    recebimentoTotal += numeroLimpo;
  }
});
console.log("Taxa Total: " + taxaTotal);
console.log("Recebimento Total: " + recebimentoTotal);

// Retorne um array com a lista abaixo
const transportes = "Carro;Avião;Trem;Onibus;Bicicleta";
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
/*
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
*/
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a").toLowerCase();
console.log(html);

// Retorne o ultimo caractere da frase
const frases = "Melhor do ano!";
console.log(frases.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "    TAXA DO PÃO",
  "    taxa do mercado  ",
  "depósito Bancário",
  "TARIFA especial",
];

let taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase().trim();
  item = item.slice(0, 4);
  if (item === "taxa") {
    taxasTotal++;
  }
  console.log(item);
});

console.log("Taxas: " + taxasTotal);

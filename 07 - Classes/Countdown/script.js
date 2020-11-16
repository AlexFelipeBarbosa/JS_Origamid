import Countdown from "./countdown.js";

const diasParaNatal = new Countdown("24 December 2020 23:59:59 GMT-0300");
const diasParaAnoNovo = new Countdown("31 December 2020 23:59:59 GMT-0300");

console.log(diasParaNatal._timeStampDiff);
console.log(diasParaNatal.days);
console.log(diasParaNatal.hours);
console.log(diasParaNatal.minutes);
console.log(diasParaNatal.seconds);
console.log("Dias para o Natal");
console.log(diasParaNatal.total);

console.log("Dias para o Ano Novo");
console.log(diasParaAnoNovo.total);

setInterval(() => {
  console.log(diasParaAnoNovo.total);
}, 5000);

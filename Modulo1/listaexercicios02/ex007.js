// Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require("prompt-sync")();
let aluguelCarroPopular = 90;
let aluguelCarroLuxo = 150;
let valorConsumo = 0;
let validarOpcoes = true;

let diasAluguel = Number(
  prompt("Informe o numero de dias que vai ficar com o carro alugado?: ")
);
let kmPercorrido = Number(
  prompt("Informe quantos km foram percorridos na viagem: ")
);
let tipoCarro = Number(prompt("Informe o tipo de carro: 1: POPULAR 2: LUXO: "));

switch (tipoCarro) {
  case 1:
    if (kmPercorrido <= 100) {
      valorConsumo = aluguelCarroPopular * diasAluguel + kmPercorrido * 0.2;
    } else {
      valorConsumo = aluguelCarroPopular * diasAluguel + kmPercorrido * 0.1;
    }

    break;
  case 2:
    if (kmPercorrido <= 200) {
      valorConsumo = aluguelCarroLuxo * diasAluguel + kmPercorrido * 0.3;
    } else {
      valorConsumo = aluguelCarroLuxo * diasAluguel + kmPercorrido * 0.25;
    }
    break;
  default:
    console.log("Informações inválidas. Tipo de carro deve ser 1 ou 2.");
    validarOpcoes = false;
    break;
}

if (validarOpcoes) {
  console.log(
    `O valor total do aluguel do carro foi: R$ ${valorConsumo.toFixed(2)}`
  );
}

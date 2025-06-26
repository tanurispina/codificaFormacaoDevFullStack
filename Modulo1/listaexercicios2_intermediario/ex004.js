// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

const prompt = require('prompt-sync')();

function fatorialRecursivo(numero) {
  if (numero < 0) {
    return "Erro: número negativo não tem fatorial";
  }

  if (numero === 0) {
    return 1;
  }

  return numero * fatorialRecursivo(numero - 1);
}

let entrada = parseInt(prompt("Digite um número inteiro: "));

let resultado = fatorialRecursivo(entrada);

if (typeof resultado === "string") {
  console.log(resultado);
} else {
  console.log("Fatorial de", entrada, "é", resultado);
}
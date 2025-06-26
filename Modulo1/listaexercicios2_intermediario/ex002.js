// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();


const descobrirNumero = Math.floor(Math.random() * 100) + 1;

let palpite = 0;
let tentativas = 0;

console.log("Tente adivinhar o número entre 1 e 100!");

while (palpite !== descobrirNumero) {
  palpite = parseInt(prompt("Digite seu palpite: "));
  tentativas++;

  if (palpite < descobrirNumero) {
    console.log("Mais alto!");
  } else if (palpite > descobrirNumero) {
    console.log("Mais baixo!");
  } else {
    console.log("Parabéns! Você acertou em " + tentativas + " tentativa(s)!");
  }
}
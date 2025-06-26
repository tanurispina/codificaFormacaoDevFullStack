// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.
const prompt = require("prompt-sync")();

let numerosSorteio = [1, 2, 3, 4, 5];
let numeroSorteado =
  numerosSorteio[Math.floor(Math.random() * numerosSorteio.length)];
let chute = 0;

while (chute !== numeroSorteado) {
  chute = Number(
    prompt("Tente descobrir o número sorteado, chute um número de 1 a 5: ")
  );

  if (chute === numeroSorteado) {
    console.log(
      `Parabéns! Você acertou!!! O número sorteado foi: ${numeroSorteado}`
    );
  } else {
    console.log("Tente novamente!");
  }
}

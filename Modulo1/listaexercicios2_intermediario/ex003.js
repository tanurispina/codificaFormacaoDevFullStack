// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");
let palavras = frase.split(" ");
let unicas = [];

for (let contador = 0; contador < palavras.length; contador++) {
  let palavra = palavras[contador];
  let jaExiste = false;


  for (let contador1 = 0; contador1 < unicas.length; contador1++) {
    if (palavra === unicas[contador1]) {
      jaExiste = true;
      break;
    }
  }


  if (!jaExiste) {
    unicas.push(palavra);
  }
}

console.log("Palavras únicas:", unicas);
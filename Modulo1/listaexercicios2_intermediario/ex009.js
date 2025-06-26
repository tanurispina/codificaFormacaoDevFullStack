// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

const prompt = require('prompt-sync')();

function paresParaObjeto(pares) {
  const obj = {};
  for (let contador = 0; contador < pares.length; contador++) {
    const chave = pares[contador][0];
    const valor = pares[contador][1];
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    pares.push([chave, obj[chave]]);
  }
  return pares;
}

const n = parseInt(prompt("Quantas pessoas você vai cadastrar? "));
const listaPessoas = [];

for (let contador = 0; contador < n; contador++) {
  console.log(`\nCadastro da pessoa ${contador + 1}:`);
  const nome = prompt("Digite o nome: ");
  const idade = prompt("Digite a idade: ");

  const pares = [
    ["nome", nome],
    ["idade", idade]
  ];

  const pessoaObj = paresParaObjeto(pares);
  listaPessoas.push(pessoaObj);
}

console.log("\nPessoas cadastradas:");
console.log(listaPessoas);

for (let contador = 0; contador < listaPessoas.length; contador++) {
  const pessoa = listaPessoas[contador];
  const pares = objetoParaPares(pessoa);
  console.log(`\nPares da pessoa ${contador + 1}:`);
  console.log(pares);
}
// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const prompt = require('prompt-sync')();

function nomesOrdenadosPorPreco(produtos) {
  const produtosOrdenados = produtos.slice().sort(function(a, b) {
    return a.preco - b.preco;
  });

  const nomes = produtosOrdenados.map(function(item) {
    return item.nome;
  });

  return nomes;
}

const n = parseInt(prompt("Quantos produtos você vai informar? "));
const produtos = [];

for (let contador = 0; contador < n; contador++) {
  const nome = prompt(`Digite o nome do produto ${contador + 1}: `);
  const preco = parseFloat(prompt(`Digite o preço do produto ${contador + 1}: `));
  produtos.push({ nome: nome, preco: preco });
}

const resultado = nomesOrdenadosPorPreco(produtos);

console.log("Nomes ordenados por preço crescente:");
console.log(resultado);
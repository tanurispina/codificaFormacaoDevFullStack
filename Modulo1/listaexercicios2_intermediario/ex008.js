// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const prompt = require('prompt-sync')();

function agruparPorComprador(registroVendas) {
  return registroVendas.reduce(function(somaPorComprador, venda) {
    if (somaPorComprador[venda.comprador]) {
      somaPorComprador[venda.comprador] += venda.valorVenda;
    } else {
      somaPorComprador[venda.comprador] = venda.valorVenda;
    }
    return somaPorComprador;
  }, {});
}

const quantidade = parseInt(prompt("Quantas vendas deseja registrar? "));
const registroVendas = [];

for (let contador = 0; contador < quantidade; contador++) {
  const comprador = prompt(`Nome do comprador da venda ${contador + 1}: `);
  const valorVenda = parseFloat(prompt(`Valor da venda ${contador + 1}: `));
  registroVendas.push({ comprador: comprador, valorVenda: valorVenda });
}

const resultado = agruparPorComprador(registroVendas);

console.log("Soma das vendas por comprador:");
console.log(resultado);
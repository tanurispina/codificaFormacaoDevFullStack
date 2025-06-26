// Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require('prompt-sync')()

let atividadeFisicaHoras = Number(prompt('Informe a quantidade de horas de atividades fisicas praticadas por dia?  '))
let quantosDias = Number(prompt('Informe quantos dias praticou atividade no mes?  '))
let quantidadeHoras = atividadeFisicaHoras*quantosDias
let pontosPorAtividade = 0
let valorPagamento = 0

if (atividadeFisicaHoras <= 0 || quantosDias <= 0 || quantosDias > 31) {
    console.log('Valores inválidos. As horas devem ser maiores que 0 e os dias entre 1 e 31.')
} else {
    quantidadeHoras = atividadeFisicaHoras * quantosDias
}

if (quantidadeHoras<=10) {
    pontosPorAtividade=quantidadeHoras*2
    valorPagamento=pontosPorAtividade*0.05

} else if (quantidadeHoras>10 && quantidadeHoras<=20)
{
    pontosPorAtividade=quantidadeHoras*5
    valorPagamento=pontosPorAtividade*0.05
}else
{
    pontosPorAtividade=quantidadeHoras*10
    valorPagamento=pontosPorAtividade*0.05
}
console.log(`A quantidade de pontos conquistados no mês foi: ${pontosPorAtividade}, rendeu R$ ${valorPagamento}`)

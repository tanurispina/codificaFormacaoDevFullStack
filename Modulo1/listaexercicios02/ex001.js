// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.
const prompt = require('prompt-sync')()

let quantCigarros = Number(prompt('Quantos cigarros sao fumados por dia: ? '))
let anosFumante = Number(prompt('Informe quantos anos ja fumou: ? '))

let diasFumante = (anosFumante * 365)
let totalCigarros = (quantCigarros * diasFumante)
let minVida = (totalCigarros  * 10)
let diasdeVidaPerdidos = (minVida / (60*24))

//Resultado sem realizar a conversao
console.log(`A quantidade de dias de vida perdidos é: ${diasdeVidaPerdidos}`)

//para a conversao usamos a funcao math.floor
let dias = Math.floor(diasdeVidaPerdidos)
let horas = Math.floor((diasdeVidaPerdidos - dias) * 24)
let minutos = Math.floor(((diasdeVidaPerdidos - dias) * 24 - horas) * 60)

//resultado apos a conversao
console.log(`A quantidade de dias perdidos é: ${dias} dias, ${horas} horas e ${minutos} minutos.`)



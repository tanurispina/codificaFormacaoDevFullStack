// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')()
let precoPassagem

let distanciaViagem = Number(prompt('Informe a distancia da viagem em KM: '))
if ( distanciaViagem>200)
    {
        precoPassagem = (distanciaViagem*0.45).toFixed(2)
        console.log(` A passagem custa R$ ${precoPassagem} `)
    } 
else
    {
        precoPassagem=(distanciaViagem*0.5).toFixed(2)
        console.log(` A passagem custa R$ ${precoPassagem}`)
    }
// Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

const prompt = require('prompt-sync')()

let numerosAleatorios = []

for (let contador=0; contador<20; contador++){
    numerosAleatorios.push(Math.floor(Math.random() *100))
}

console.log('Os numeros aleatorios gerados foram: ',numerosAleatorios.join(', '))

//comparar numeros colcocando em ordem crescente
let crescente = [...numerosAleatorios].sort((a,b) => a-b)

console.log('Os numeros aleatorios organizados em ordem crescente: ',crescente.join(', '))

//comparar numeros colcocando em ordem decrescente
let decrescente=[...numerosAleatorios].sort((a,b) => b-a)

console.log('Os numeros aleatorios organizados em ordem decrescente: ',decrescente.join(', '))
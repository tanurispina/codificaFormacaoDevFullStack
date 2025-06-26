// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require('prompt-sync')()

let nomePessoas = []

for (let contador=0; contador<7; contador++){
   nomePessoas.push(prompt('Informe o nome da pessoa: ')) 
}

console.log('Os nomes informados foram: ', nomePessoas.join(', '))

//invertendo a sequencia
let nomesInvertidos =nomePessoas.reverse()
console.log('os nomes informados de tras pra frente: ', nomesInvertidos.join(', '))
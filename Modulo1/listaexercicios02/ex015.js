// Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')()

let numerosInteiros = []

for(let contador=0; contador<10; contador++){
    numerosInteiros.push(number(prompt('Informe um numero inteiro: ')))

}

numerosInteiros.forEach((numeroPar,indice)=>{

    if(numeroPar%2===0){
        console.log(`O numero ${numeroPar} na posicao ${indice} é um Numero par`)
    }})


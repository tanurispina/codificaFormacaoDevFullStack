// Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

const prompt= require('prompt-sync')();

let fibonacci=[1,1]


for (let contador=2; contador<10; contador++)
    {
            let numeroSequ = fibonacci[contador-1] + fibonacci[contador-2]
            fibonacci.push(numeroSequ)
        
    }

   console.log('A sequencia com os 10 primeiros numeros é: ' ,fibonacci.join(', '))
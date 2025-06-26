// Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonaccia

const prompt= require('prompt-sync')();

let fibonacci=[1,1]


for (let contador=2; contador<15; contador++)
    {
            let numeroSequ = fibonacci[contador-1] + fibonacci[contador-2]
            fibonacci.push(numeroSequ)
        
    }

   console.log('Os 15 primeiros números da sequência de Fibonacci...: ' ,fibonacci.join(', '))
// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt= require('prompt-sync')();

let numeroInformado = Number(prompt('Informe um numero inteiro positivo : '))
let fatorialNum=1

if (numeroInformado>0)
        {
            for (let contador=numeroInformado; contador>=1; contador--)
            {
                fatorialNum *=contador
            }
               
        }
else{
    console.log(' Numero Negativo ou informado 0, não é possivel realizar o fatorial')
}
console.log(`O fatorial do numero informado é: ${fatorialNum}`)

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt= require('prompt-sync')();

let somaS = 0
let novaSoma=0
for ( let numeroS= 0; numeroS <5; numeroS++)
{
    let nuM = Number(prompt(' Informe um numero : '))
    somaS = nuM +novaSoma
    novaSoma= somaS
}
   console.log(` A soma dos numeros informados, é: ${novaSoma}`) 
    


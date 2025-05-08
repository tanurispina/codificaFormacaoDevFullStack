// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt= require('prompt-sync')();

let imprimirNumero = Number(prompt(' Informe um numero Inteiro: '))

for (let imprimir=0; imprimir<10; imprimir++)
    {
        console.log(imprimirNumero)
    }
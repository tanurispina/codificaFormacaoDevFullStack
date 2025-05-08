// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt= require('prompt-sync')();

let primeiroNum = Number(prompt('Informe o primeiro numero : '))
let segundoNum = Number(prompt('Informe o segundo numero : '))

if ( primeiroNum == segundoNum)
    {
        console.log('Numeros iguais, necessario refazer o processo')
    }
else
    {
        if ( primeiroNum > segundoNum)
            {
                console.log(`Os 2 numeros informados em ordem crescente são: ${segundoNum}, ${primeiroNum}`)
            }
        else
            {
                console.log(`Os 2 numeros informados em ordem crescente são: ${primeiroNum}, ${segundoNum}`)
            }
    }      
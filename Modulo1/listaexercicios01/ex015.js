// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const prompt= require('prompt-sync')();

let valorseq1=0
let valorseq2=1

for (let contador=1; contador<=10; contador++)
    {
        console.log(valorseq1)
        let numeroNovo=valorseq1+valorseq2
        valorseq1=valorseq2
        valorseq2=numeroNovo
    }

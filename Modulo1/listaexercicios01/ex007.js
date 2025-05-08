// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt= require('prompt-sync')();

 let macasCompradas = Number(prompt('Informe o numero de macas compradas: '))
 let valorCompras = 0
 
 if (macasCompradas<12)
    {
        valorCompras=(macasCompradas*0.3)
    } 
else{
        valorCompras=(macasCompradas*0.25)
    }

    console.log(`A quantidade de macas compradas foi: ${macasCompradas}, o valor total das compras foi: R$ ${valorCompras.toFixed(2)}`)
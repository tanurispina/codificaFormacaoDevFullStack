// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt= require('prompt-sync')()

let primeiroValor=Number(prompt(' Informe o comprimento do primeiro valor da reta: '))
let segundoValor=Number(prompt(' Informe o comprimento do segundo valor da reta: '))
let terceiroValor=Number(prompt(' Informe o comprimento do terceiro valor da reta: '))

if ( (primeiroValor<segundoValor+terceiroValor) && (segundoValor< primeiroValor+terceiroValor) && (terceiroValor<primeiroValor+segundoValor)) 
        {
            
            console.log('É possivel formar um triangulo!!!')
        }
    else
        {
            console.log('Não é possivel formar um triangulo!!!')
        }
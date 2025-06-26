// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')()
let somaNum=0
let numPares=0
let contador=0
let menorNumero=0

while(true){
//validacao do numeroo
    let numero = Number(prompt('Informe um numero: '))
        if (isNaN(numero) || numero<=0){
            console.log('Numero inválido. Digite um número maior que zero.')
        
        continue;
        }
        
    somaNum+= numero; //soma os numenos
    contador++
    
//verificacao de numeros pares
    if (numero % 2 ===0){
        numPares++
    }
//verificacao de menor numero
        if (contador === 1 || numero < menorNumero) {
        menorNumero = numero;
    }

//validacao para continuacao
    let resp = prompt('Deseja continuar? (S/N): ').toUpperCase();
        if (resp !== 'S') {
            break;
        }
}
//calculo da media
let mediaNum=(somaNum/contador)

// //impressoes na tela
console.log(`A soma dos numeros digitados é: ${somaNum}`)
console.log(`O menor numero digitado foi: ${menorNumero}`)
console.log(`A media numeros digitados é: ${mediaNum.toFixed(2)}`)
console.log(`A quantidade de numeros pares é: ${numPares}`)

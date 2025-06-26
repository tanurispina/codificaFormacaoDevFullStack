// Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência

const prompt = require('prompt-sync')()

let primeiroTermo=Number(prompt('Informe o primeiro termo da PA: '))
let razaoPa = Number(prompt('Informe a razao da PA: '))

if(isNaN(primeiroTermo) || primeiroTermo <=0 || isNaN(razaoPa) || razaoPa<=0){
    console.log('Numeros inválidos. Digite números maiores que zero.')
        
} else{

    let elementosPa = []

    for (let contador = 0; contador < 10; contador++) {
        let an = primeiroTermo + contador * razaoPa;
        elementosPa.push(an);
    }

    let somaElementos=0
    elementosPa.forEach(elemento=>{
        somaElementos+=elemento
    })

    console.log("Os 10 primeiros termos da PA são", elementosPa.join(', '));
    console.log("A soma dos Elementos da PA:", somaElementos);
}

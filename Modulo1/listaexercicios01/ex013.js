// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt= require('prompt-sync')();

let somaNumero =0
let contadorNumero =0

let numeroDecimal=Number(prompt('Informe um numero decimal, para encerrar digite 0: '))

while (numeroDecimal != 0){
   
    somaNumero+=numeroDecimal
    contadorNumero++
    numeroDecimal=Number(prompt('Informe um numero decimal, para encerrar digite 0: '))
}

console.log('A media é: ' , (somaNumero/contadorNumero).toFixed(2))
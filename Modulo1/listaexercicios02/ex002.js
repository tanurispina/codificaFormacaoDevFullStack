// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h
// exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')()

let velocidadeCarro = Number(prompt('Informe a velocidade do carro em KM/H: '))
if (velocidadeCarro>80)
    {
        let excedenteVel=(velocidadeCarro-80)
        let valorCobrado=(excedenteVel*5)
        console.log(`A velocidade do carro é: ${velocidadeCarro} km/h, velocidade acima do permitido, VEICULO MULTADO!!Valor da Multa: RS ${valorCobrado}`)
    }
else 
    {
        console.log(`A velocidade do carro é: ${velocidadeCarro} km/h,  veiculo dentro da velocidade da via. Boa Viagem!!!`)
    }
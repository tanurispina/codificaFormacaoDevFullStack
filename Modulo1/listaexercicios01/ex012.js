// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

const prompt= require('prompt-sync')();

console.log(' |---   ESCOLHA A OPCAO DA TABUADA    ---  |')
console.log(' |                                         |')
console.log(' | 1 - SOMA                                |')
console.log(' | 2 - SUBTRACAO                           |')
console.log(' | 3 - MULTIPLICACAO                       |')
console.log(' | 4 - DIVISAO                             |') 
console.log(' -------------------------------------------')

let opcaoSelecionada = Number(prompt(''))
let numero = 0;
let numeroTabuada=0

    switch (opcaoSelecionada) {
        case 1:
            numeroTabuada = Number(prompt('Informe o numero para calcular a tabuada: '))
                for (numero= 0; numero <=10; numero++)
                    console.log(`${numeroTabuada} + ${numero} = ${numeroTabuada + numero}`);
        break 
        case 2:
            numeroTabuada = Number(prompt('Informe o numero para calcular a tabuada: '))
                for (numero= 0; numero <=10; numero++)
                    console.log(`${numeroTabuada} - ${numero} = ${numeroTabuada - numero}`);
        break
        case 3:
            numeroTabuada = Number(prompt('Informe o numero para calcular a tabuada: '))
                for (numero= 0; numero <=10; numero++)
                console.log(`${numeroTabuada} X ${numero} = ${numeroTabuada * numero}`);
        break 
        case 4:
            numeroTabuada = Number(prompt('Informe o numero para calcular a tabuada: '))
                for (numero= 1; numero <=10; numero++)
                console.log(`${numeroTabuada} / ${numero} = ${numeroTabuada / numero}`);
        break
    default : 
        
            console.log('Opcao Invalida, execute novamente!!!') 
 }



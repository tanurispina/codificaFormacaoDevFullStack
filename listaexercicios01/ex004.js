// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
//meu script------
// BEM VINDO A TUBATPINA TELECOM
// Escolha uma dessas opções abaixo:
// 
// Digite uma das opções abaixo: 
// 1 - COMERCIAL
// 2 - FINANCEIRO 
// 3 - SUPORTE TECNICO 
// 0 - ENCERRAR ATENDIMENTO

const prompt= require('prompt-sync')();

console.log(' |---   BEM VINDO A TUBATPINA TELECOM ---  |')
console.log(' |                                         |')
console.log(' | 1 - COMERCIAL                           |')
console.log(' | 2 - FINANCEIRO                          |')
console.log(' | 3 - SUPORTE TECNICO                     |')
console.log(' | 0 - ENCERRAR ATENDIMENTO                |') 
console.log(' -------------------------------------------')


let opcaoEscolhida = Number(prompt('ESCOLHA A OPCAO DESEJADA: ' ))

switch (opcaoEscolhida) {
    case 1:
        console.log(' Você optou por falar com nosso SETOR COMERCIAL, aguarde um de nossos atendentes!')
        break
    case 2:
        console.log(' Você optou por falar com nosso SETOR FINANCEIRO, aguarde um de nossos atendentes!')
        break
    case 3:
        console.log(' Você optou por falar com nosso SETOR DE SUPORTE TECNICO, aguarde um de nossos atendentes!')
        break
    case 0:
        console.log(' Até mais! Lembre-se de que estamos sempre à sua disposição.')
        break
    default:
        console.log('OPCAO INVALIDA');
}
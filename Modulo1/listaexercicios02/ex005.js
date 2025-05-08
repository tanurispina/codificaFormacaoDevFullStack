// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt= require('prompt-sync')()
console.log('|-----------------------|')
console.log('|    PARTIDA JOKENPO    |')
console.log('|                       |')
console.log('| 1 - JOGAR A PARTIDA   |')
console.log('| 0 - ENCERRAR PARTIDA  |')
console.log('|-----------------------|')

let opcaoEscolhida = Number(prompt(''))

switch (opcaoEscolhida) {
    case 1: 
        let primeiroJogador=Number(prompt('Jogador 1: Escolha a opcao: 1- Pedra; 2 - Papel 3 - Tesoura: '))
        let segundoJogador=Number(prompt('Jogador 2: Escolha a opcao: 1- Pedra; 2 - Papel 3 - Tesoura: '))
            if (primeiroJogador ==segundoJogador){
                console.log('EMPATE')
            }else if (primeiroJogador==1 && segundoJogador==2){
                console.log(' Papel vence Pedra! Segundo jogador Venceu')
            }else if (primeiroJogador==1 && segundoJogador==3){
                console.log(' Pedra vence Tesoura! primeiro jogador Venceu')
            }else if (primeiroJogador==2 && segundoJogador==3){
                console.log(' Tesoura vence papel! Segundo jogador Venceu')
            }else if (primeiroJogador==2 && segundoJogador==1){
                console.log(' Papel vence Pedra! Primeiro jogador Venceu')
            }else if (primeiroJogador==3 && segundoJogador==1){
                console.log('Pedra vence Tesoura! Primeiro jogador Venceu')
            }else {
                console.log(' Tesoura vence Papel! Primeiro jogador Venceu')
            }
 
            
    break

    default:
        console.log(' PARTIDA ENCERRADA')
}
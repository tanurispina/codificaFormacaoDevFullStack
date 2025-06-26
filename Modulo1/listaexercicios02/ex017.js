// Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const prompt = require('prompt-sync')()

let cadastro =[]


for (let linha = 0; linha < 9 ; linha++) {
    let nomeIdade =[]
    for (let coluna = 0; coluna < 1; coluna++) {
        let nome = (prompt('Informe o nome: '))
        let idade = (Number(prompt('Informe a idade: '))) 
    nomeIdade.push(nome,idade)   
    } 
cadastro.push(nomeIdade)

}

for (let i = 0; i < cadastro.length; i++) {
  if (cadastro[i][1] < 18) {
    console.log(`Nome: ${cadastro[i][0]}, idade: ${cadastro[i][1]}`);
  }
}



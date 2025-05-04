// // Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.
// Vou classificar nesses intervalos 
// infantil (0-12 anos), adolescente (13-17 anos), adulto (18-64 anos) e idoso (65+ anos).

const prompt= require('prompt-sync')();

let idadePessoa = Number(prompt(' Informe a idade da Pessoa: '))
if (idadePessoa> 0 && idadePessoa<13)
    {
        console.log(` A idade fornecida é: ${idadePessoa}, ela faz parte da Categoria CRIANCA`)
    }
else if ( idadePessoa>12 && idadePessoa<18)
    {
        console.log(` A idade fornecida é: ${idadePessoa}, ela faz parte da Categoria ADOLESCENTE`)
    }
else if ( idadePessoa >17 && idadePessoa<65)
    {
        console.log(` A idade fornecida é: ${idadePessoa}, ela faz parte da Categoria ADULTO`)
    }
else
    {
        console.log(` A idade fornecida é: ${idadePessoa}, ela faz parte da Categoria IDOSO`)
    }
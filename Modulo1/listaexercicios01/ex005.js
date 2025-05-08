// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
//vou Considerar essa tabela
// Menor que 18,5	 ----- baixo peso	
// Entre 18,5 e 24,9	-- peso Normal	
// Entre 25,0 e 29,9	-- Sobrepeso
// maior que 30,0      	-- Obesidade
	

const prompt= require('prompt-sync')();

let alturaPessoa=Number(prompt(' Informe a altura da pessoa, por exemplo: 1.74 : '))
let pesoPessoa = Number(prompt(' Informe o peso da pessoa em kg: '))

let imcCalculo = pesoPessoa / (alturaPessoa * alturaPessoa);

    if (imcCalculo<18.5)
        {
            console.log(` A altura informada foi: ${alturaPessoa}, O peso informado foi: ${pesoPessoa} `)
            console.log(` O IMC do paciente é: ${imcCalculo.toFixed(2)} : PACIENTE COM BAIXO PESO`)
        }
    else if (imcCalculo>=18.5 && imcCalculo<=24.9)
        {
            console.log(` A altura informada foi: ${alturaPessoa}, O peso informado foi: ${pesoPessoa} `)
            console.log(` O IMC do paciente é: ${imcCalculo.toFixed(2)} : PACIENTE COM PESO NORMAL`)
        }
    else if(imcCalculo>=25 && imcCalculo<=29.9)
        {
            console.log(` A altura informada foi: ${alturaPessoa}, O peso informado foi: ${pesoPessoa} `)
            console.log(` O IMC do paciente é: ${imcCalculo.toFixed(2)} : PACIENTE COM SOBREPESO`)
        }
    else 
        {
            console.log(` A altura informada foi: ${alturaPessoa}, O peso informado foi: ${pesoPessoa} `)
            console.log(` O IMC do paciente é: ${imcCalculo.toFixed(2)} : PACIENTE COM OBESIDADE`)
        }
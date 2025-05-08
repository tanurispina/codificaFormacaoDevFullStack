// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
//(Vou considerar 0-3.9: reprovado) - ( 4 -6,9 : recuperacao) - (7-10) Aprovado

const prompt= require('prompt-sync')();

let notaAluno = Number(prompt(' Informe a Nota do Aluno: '))
    if (notaAluno <=3.9)
        {
            console.log(` A nota do aluno informada foi: ${notaAluno}, O aluno está REPROVADO! `)
        }
    else if (notaAluno >=4 && notaAluno<=6.9)
        {
            console.log(` A nota do aluno informada foi: ${notaAluno}, O aluno em RECUPERACAO! `)
        }
    else
        {
            console.log(` A nota do aluno informada foi: ${notaAluno}, Parabéns, APROVADO! `)
        }
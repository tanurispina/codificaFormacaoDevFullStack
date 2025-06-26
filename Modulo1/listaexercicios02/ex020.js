// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const prompt = require('prompt-sync')()

class contrachequeFuncionario {
    constructor(matricula,nome,salarioBruto,descontoINSS,salarioLiquido) {
        this.matricula=matricula
        this.nome=nome
        this.salarioBruto=salarioBruto
        this.descontoINSS=descontoINSS
        this.salarioLiquido=salarioLiquido
        
    }
}

let funcionariosEmpresa= []

for (let contador = 0; contador < 2; contador++) {
    
const matriculaFuncionario= Number(prompt('Informe a matricula do funcionario: '))
const nomeFuncionario= prompt('Informe o nome do funcionario: ')
const salarioBrutoFuncionario= prompt('Informe o salario bruto do funcionario: ')
const descontoINSS='12 %'
const salarioLiquidoFuncionario= salarioBrutoFuncionario- (salarioBrutoFuncionario * 0.12)

const salarioBrutoFuncionarioValidado = parseFloat(salarioBrutoFuncionario).toFixed(2)
const salarioLiquidoFuncionarioValidado = parseFloat(salarioLiquidoFuncionario).toFixed(2)

const novoFuncionario = new contrachequeFuncionario(matriculaFuncionario,nomeFuncionario,salarioBrutoFuncionarioValidado,descontoINSS,salarioLiquidoFuncionarioValidado);

funcionariosEmpresa.push(novoFuncionario)

}

funcionariosEmpresa.forEach((funcionarios,index) => {
    console.log(`funcionario ${index + 1}:`)
    console.log(funcionarios)
});
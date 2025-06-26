// // Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// // um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')()

class dadosFuncionario {
    constructor(nome, cargo, salario) {
        this.nome=nome
        this.cargo=cargo
        this.salario=salario
    }
}

const nomeFuncionario=prompt('Informe o nome do funcionario: ')
const cargoFuncionario=prompt('Informe o cargo do funcionario: ')
const salarioFuncionarioTexto = (prompt('Informe o salario do funcionario: '))
const salarioFuncionario = parseFloat(salarioFuncionarioTexto)

const novoFuncionario = new dadosFuncionario(nomeFuncionario,cargoFuncionario,salarioFuncionario);


console.log(novoFuncionario)


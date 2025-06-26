// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt=require('prompt-sync')()

let somaH=0
let somaM=0

while (true){
    let sexo = prompt('Informe o Sexo do Funcionario: H/M ').toUpperCase()
    if (sexo !== 'H' && sexo !== 'M') {
        console.log('Sexo inválido. Use H ou M.');
    continue;
  }

    let salario = Number(prompt('Informe o salario do Funcionario: '))
     if (isNaN(salario) || salario <= 0) {
        console.log('Salário inválido. Digite um número maior que zero.');
    continue;
  }

   if (sexo === 'H'){
        somaH += salario;}
    else {
        somaM += salario;}

  let resp = prompt('Deseja continuar? (S/N): ').toUpperCase();
  if (resp !== 'S') 
break;
}

console.log('Cadastro encerrado!');
console.log(`Total pago aos homens: R$ ${somaH.toFixed(2)}`);
console.log(`Total pago às mulheres: R$ ${somaM.toFixed(2)}`);
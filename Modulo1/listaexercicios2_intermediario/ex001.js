// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

const prompt = require('prompt-sync')();

const dia = parseInt(prompt("Informe o dia: "));
const mes = parseInt(prompt("Informe o mês: "));
const ano = parseInt(prompt("Informe o ano: "));

function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12) {
    return false;
  }
  if (dia < 1 || dia > 31) {
    return false;
  }
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
    return false;
  }
  if (mes == 2) {
    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
      if (dia > 29) {
        return false;
      }
    } else {
      // Ano normal
      if (dia > 28) {
        return false;
      }
    }
  }

  return true;
}

if (ehDataValida(dia, mes, ano)) {
  console.log("A data é válida!");
} else {
  console.log("A data é inválida!");
}
// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function esperarAntesDeExecutar(funcao, tempoEspera) {
  let identificadorDoTemporizador;

  return function() {
    const contextoAtual = this;
    const argumentosRecebidos = arguments;

    if (identificadorDoTemporizador) {
      clearTimeout(identificadorDoTemporizador);
    }

    identificadorDoTemporizador = setTimeout(function() {
      funcao.apply(contextoAtual, argumentosRecebidos);
    }, tempoEspera);
  };
}

function mostrarAlerta() {
  console.log("Executando a função depois da espera!");
}

const funcaoComEspera = esperarAntesDeExecutar(mostrarAlerta, 2000);

funcaoComEspera();
funcaoComEspera();
funcaoComEspera();
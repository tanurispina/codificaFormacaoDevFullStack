// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  const cache = {};

  return function(celsius) {
    if (cache[celsius] !== undefined) {
      return cache[celsius];
    } else {
      const resultado = fn(celsius);
      cache[celsius] = resultado;
      return resultado;
    }
  };
}

function celsiusParaFahrenheit(c) {
  console.log("Convertendo", c, "°C para Fahrenheit...");
  return (c * 9 / 5) + 32;
}

const converterMemoizado = memoize(celsiusParaFahrenheit);

console.log(converterMemoizado(38)); 
console.log(converterMemoizado(38)); 
console.log(converterMemoizado(22));
console.log(converterMemoizado(22)); 
function calcularFactorial(numero) {
  if (numero < 0) {
    return "No se puede calcular el factorial de un número negativo.";
  } else if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

const numeroEjemplo = 5;
const resultadoFactorial = calcularFactorial(numeroEjemplo);

console.log(`El factorial de ${numeroEjemplo} es: ${resultadoFactorial}`);

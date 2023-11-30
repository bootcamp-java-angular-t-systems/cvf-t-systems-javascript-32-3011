function determinarParImpar(numero) {
  return numero % 2 === 0 ? `El número ${numero} es par` : `El número ${numero} es impar`;
}

function mostrarParImpar() {
  const numero = document.getElementById("numeroInput").value;
  const resultado = determinarParImpar(numero);
  document.getElementById("resultadoParImpar").textContent = resultado;
}

const numeroEjemplo = 7;
const resultado = determinarParImpar(numeroEjemplo);

console.log(resultado);
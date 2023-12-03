function reverseTexto(texto) {
  const textoLimpio = texto.toLowerCase().replace(/\s/g, '');
  return textoLimpio === textoLimpio.split('').reverse().join('');
}

function verificarPalindromo() {
  const texto = reverseTexto(document.getElementById("textoInput").value);
  const resultadoMsg = texto
    ? `La cadena es un palíndromo`
    : `La cadena no es un palíndromo`;

  document.getElementById("resultadoPalindromo").textContent = resultadoMsg;
}
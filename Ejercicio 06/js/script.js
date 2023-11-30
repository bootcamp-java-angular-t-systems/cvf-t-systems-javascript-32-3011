function calcularLetraDNI(numeroDNI) {
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'P', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  var resto = numeroDNI % 23;
  var letra = letras[resto];
  console.log(`La letra correspondiente al DNI ${numeroDNI} es: ${letra}`);
}

calcularLetraDNI(12345678);


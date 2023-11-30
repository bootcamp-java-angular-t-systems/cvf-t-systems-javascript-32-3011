function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    console.log(`La cadena ${cadena} está formada solo por mayúsculas.`);
  } else if (cadena === cadena.toLowerCase()) {
    console.log(`La cadena ${cadena} está formada solo por minúsculas.`);
  } else {
    console.log(`La cadena ${cadena} es una mezcla de mayúsculas y minúsculas.`);
  }
}

const ejemplo1 = "TODOMAYUSCULAS";
const ejemplo2 = "todominusculas";
const ejemplo3 = "MezclaDeMayusculasYMinusculas";

analizarCadena(ejemplo1);
analizarCadena(ejemplo2);
analizarCadena(ejemplo3);

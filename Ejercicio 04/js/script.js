var valores = [true, 5, false, "hola", "adios", 2];

// Determinar cuál de los dos elementos de texto es mayor
var textoMayor = valores[3].length > valores[4].length ? valores[3] : valores[4];
console.log("El elemento de texto mayor es: " + textoMayor);

var valores = [true, 5, false, "hola", "adios", 2];

var valores = [true, 5, false, "hola", "adios", 2];

// 1. Determinar cuál de los dos elementos de texto es mayor
var textoMayor = valores[3].length > valores[4].length ? valores[3] : valores[4];
console.log("1. Determinar cuál de los dos elementos de texto es mayor");
console.log("El elemento de texto mayor es: " + textoMayor);

// 2. Utilizando exclusivamente los dos valores booleanos del array
var resultadoTrue = valores[0] || valores[2];  // true OR false
var resultadoFalse = valores[0] && valores[2]; // true AND false
console.log("2. Utilizando exclusivamente los dos valores booleanos del array");
console.log("Operadores para obtener true: " + resultadoTrue);
console.log("Operadores para obtener false: " + resultadoFalse);

// 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
var suma = valores[1] + valores[5];    
var resta = valores[1] - valores[5];
var multiplicacion = valores[1] * valores[5];
var division = valores[1] / valores[5];
var modulo = valores[1] % valores[5];

console.log("3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos");
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);

//parte1
let parte1;
parte1 = prompt("introduce un numero y te dire si es par o impar");
if (parte1 % 2 == 0) {
  console.log("El numero " + parte1 + " es par");
} else {
  console.log("El numero " + parte1 + " es impar");
}
//espacio
//espacio
//parte2
let parte2n1;
let parte2n2;
parte2n1 = prompt(
  "introduce un primer numero y te dire si es mayor igual o menor que el segundo"
);
parte2n2 = prompt("introduce un segundo numero para la comparacion");
if (parte2n1 >= parte2n2) {
  console.log("El numero " + parte2n1 + " es mayor o igual que " + parte2n2);
} else {
  console.log("El numero " + parte2n1 + " es menor que " + parte2n2);
}
//espacio
//espacio
//parte3
let parte3 = prompt("Introduce un numero y te dire si es multiplo de 5");
if (parte3 % 5) {
  console.log("El numero " + parte3 + " no es multiplo de 5");
} else {
  console.log("El numero " + parte3 + " es multiplo de 5");
}
//espacio
//espacio
//parte4
let parte4 = prompt("Introduce un numero");
for (let i = 0; i <= parte4; i++) {
  console.log(i);
}
//espacio
//espacio
//parte5
let parte5palabra = prompt("introduce una palabra");
let parte5numero = prompt(
  "introduce un numero con la cantidad de veces que quieres que se repita la palabra"
);
for (let i = 0; i < parte5numero; i++) {
  console.log(parte5palabra);
}
//espacio
//esapcio
//parte6
let dato1 = prompt("ingrese una palabra");
let dato2 = prompt("ingrese una palabra");
let dato3 = prompt("ingrese una palabra");
Array(dato1, dato2, dato3);
console.log();

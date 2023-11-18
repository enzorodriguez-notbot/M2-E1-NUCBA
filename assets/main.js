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
const datosp6 = [dato1, dato2, dato3];

console.log("imprimo todo el array", datosp6);
//espacio
//espacio
//parte7
let n1 = prompt("ingrese el primer numero");
let n2 = prompt("ingrese el segundo numero");
let n3 = prompt("ingrese el tercer numero");
let n4 = prompt("ingrese el cuarto numero");
let n5 = prompt("ingrese el quinto numero");
let n6 = prompt("ingrese el sexto numero");
let n7 = prompt("ingrese el septimo numero");
let n8 = prompt("ingrese el octavo numero");
let n9 = prompt("ingrese el noveno numero");
let n10 = prompt("ingrese el decimo numero");

const datosp7 = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];

for (const numerop7 of datosp7) {
  if (numerop7 === n5) {
    continue;
  }
  console.log(numerop7);
}
//espacio
//espacio
//parte8
let multin1 = prompt("ingrese un numero que luego multiplicare n1/3");
let multin2 = prompt("ingrese un numero que luego multiplicare n2/3");
let multin3 = prompt("ingrese un numero que luego multiplicare n3/3");
let multiplicador = prompt(
  "dime el numero por el que quieres multiplicar los numeros anteriores"
);

const p8numeros = [multin1, multin2, multin3];

for (const numerosamultiplicar of p8numeros) {
  let resultados = numerosamultiplicar * multiplicador;
  console.log("resultado de la multiplicacion =", resultados);
}

//Ejercicio 3: Declara dos variables booleanas condicion1 y condicion2.
// Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas. 

const prompt = require('prompt-sync')();

const nameTrue = "true";

const resp1 = prompt('Ingrese cómo se resuelte la condición 1: ')

let cond1;
if (resp1 == nameTrue) {
    cond1 = true;
} else {
    cond1 = false;
}

const resp2 = prompt('Ingrese cómo se resuelte la condición 2: ')

let cond2;
if (resp2 == nameTrue) {
    cond2 = true;
} else {
    cond2 = false;
}

console.log("Cond1: ", cond1)
console.log("Cond2: ", cond2)

if (cond1 && cond2) {
    console.log("si es operador es && la condición da TRUE")
} else {
    console.log("si es operador es && la condición da FALSE")
}

if (cond1 || cond2) {
    console.log("si es operador es || la condición da TRUE")
} else {
    console.log("si es operador es || la condición da FALSE")
}
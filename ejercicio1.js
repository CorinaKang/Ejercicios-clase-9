//Ejercicio 1: 
//Declara dos variables numéricas numero1 y numero2. 
// Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales. 

const prompt = require ('prompt-sync')();

let numero1 = parseInt(prompt ('Ingrese el primer número: '));
let numero2 = parseInt(prompt ('Ingrese el segundo número: '));

if (numero1 > numero2) {
    console.log ('El primer número es mayor que el segundo.');
} else if (numero1 < numero2) {
    console.log ('El segundo número es mayor que el primero.');
} else {
    console.log ('Los dos números son iguales.');
}
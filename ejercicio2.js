//Ejercicio 2:  Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. 
//Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes. 

const prompt = require ('prompt-sync')();

const rangoMinimo = 1
const rangoMaximo = 20

let numero = (prompt('Ingrese un número: '));

if (numero >= rangoMinimo && numero <= rangoMaximo) {
    console.log("El número se encuentra dentro del rango establecido.");
}
else {
    console.log("El número se encuentra fuera del rango establecido.");
}
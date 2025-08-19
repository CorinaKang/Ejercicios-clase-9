//Ejercicio 7
//Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras.
//Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462) 

const prompt = require('prompt-sync')();

let pesoKilos =parseInt(prompt('Ingrese su peso en kilogramos: '));
const pesoLibras= 2.20462
const pesoFinal = pesoKilos * pesoLibras

    console.log(`Su peso el libras es: ${pesoFinal.toFixed(2)} `);

//Notas para mi: 
//  $ {} --> se usa para  insertar variables o expresiones de JavaScript directamente en la cadena de texto.
//  `` (Backticks) --> permiten insertar variables o expresiones de JavaScript directamente dentro de una cadena de texto. Para hacerlo, usas la sintaxis ${...}
//                      También permiten escribir texto en varias líneas sin tener que usar caracteres especiales como \n (salto de línea).

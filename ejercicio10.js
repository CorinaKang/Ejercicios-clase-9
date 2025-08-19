//Ejercicio 10:  Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente.
// Si el número no está dentro de ese rango, muestra un mensaje de error. 

const prompt = require ('prompt-sync')();

let numero =parseInt(prompt('Ingrese un número entre 1 y 7: '));

switch (numero){
    case 1:
        console.log('El día correspondiente al 1 es Lunes. ');
    break;
   
    case 2:
        console.log('El día correspondiente al 2 es Martes. ');
    break;
   
    case 3:
        console.log('El día correspondiente al 3 es Miércoles. ');
    break;

    case 4:
        console.log('El día correspondiente al 4 es Jueves. ');
    break;

    case 5:
        console.log('El día correspondiente al 5 es Viernes. ');
    break;

    case 6:
        console.log('El día correspondiente al 6 es Sábado. ');
    break;

    case 7:
        console.log('El día correspondiente al 7 es Domingo. ');
    break;

    default:
        console.log('Error. Debe ingresar un número entre 1 y 7');

}
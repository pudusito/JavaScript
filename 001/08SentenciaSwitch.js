// La sentencia switch evalúa una expresión y ejecuta el código del bloque case que coincida con el valor. 
// Es útil cuando tienes muchas condiciones posibles sobre una misma variable.
let numero = 4;

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

console.log(numeroTexto);
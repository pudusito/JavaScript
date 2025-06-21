let mes = '11'; //si lo ponemos como str nos lanza valor incorrecto
let estacion = 'Estación desconocida';

switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';                
}
console.log(estacion);

// switch no solo podemos usar valores numericos si no que tambien str, las comparaciones de switch son tipo estrictos, compara el tipo de dato.
var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido; //añadimos un espacio vacio para mejor visualizacion
console.log(nombreCompleto);

var nombreCompleto2 = 'carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

//las expresiones se valuan de izq a derecha(define el tipo de variable que toma primero, por lo tanto no es necesario definir la variable)
var x = nombre + 219;
console.log(x);

x = 219 + nombre;
console.log(x)

x = nombre + 2 + 4;
console.log(x)

//funcionan como en algebra
x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);
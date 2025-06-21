let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
};

//uso de call para usar

//el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('Costructor') );

console.log(persona1.nombreCompleto.call(persona2, 'Programador', '+569 33223322') );

/*Tanto call() como apply() en JavaScript son métodos que permiten invocar funciones cambiando el valor de this, es decir, el contexto en el que se ejecuta la función.

Diferencia principal entre call() y apply():

- call()	        Como una lista separada por comas
- apply()	        Como un array o arreglo
*/
let array= ['INGENIERO', '+666666'];
console.log(persona1.nombreCompleto.apply(persona2, array) );
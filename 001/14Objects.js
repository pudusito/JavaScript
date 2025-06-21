let x = 10;
console.log(x.length);

//esto es un objeto.
let persona = {
    nombre: 'juan',
    apellido : 'perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
};

console.log(persona.nombre, persona.edad);
console.log(persona['nombre'], persona['edad']);

console.log(persona);
console.log(persona.nombreCompleto());

//for in //itera por cada elemento en el objeto
for( propiedad in persona){
    console.log(propiedad);
    console.log(persona.nombreCompleto())
}

//añadir propiedades
persona.telefono = '+569 12345678'
console.log(persona.telefono);
//eliminar propiedades
delete persona.telefono;
//console.log(persona).telefono;

//concatenar cada valor de cada propiedad
console.log('nombre: ' + persona.nombre , 'correo:' + persona.email)

//leer los valores del objeto, devuelve un array
let personaArray = Object.values(persona);
console.log(personaArray);
//leer en json, devuelve un str de json
let personaString = JSON.stringify(persona);
console.log(personaString);

/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
//creamos otro objeto
let persona2 = new Object();
persona2.nombre = 'carlos' //creamos sus argumentos
persona2.apellido= 'Jara'
persona2.direccion= 'avendia peru'

console.log(persona2.nombre);
console.log(persona2);


/*-----------------------------------------------------------------------------------------------------------*/

//GET and SET
let persono= {
    nombre: 'juan',
    apellido : 'perez',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma: 'fr',
    get idiom(){
        return this.idioma.toLocaleUpperCase();
    },
    set idiom(idiom){
        this.idioma = idiom.toLocaleUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
};
//set (metodo de idioma, guarda en caps)
persono.idiom = 'en';
console.log(persono.idiom);
console.log(persono.idioma); //verificamos que se actualizo la variable.
//get (metodo para nombre completo)
console.log(persono.nombreCompleto);
console.log(persono.idiom)

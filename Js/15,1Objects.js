/* Creacion de objetos en javascript */
//Javascript ofrece multiples formas de crear objetos, Veamos algunas:

/*-----------------------------------------------------------------------------------------*/
// 1. Literales de Objeto (se puede comparar con el formato json)
const persona = {

    nombre: "ana",
    edad:30,

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};

console.log(persona.nombre, persona.edad, persona.saludar());

/* --------------------------------------------------------------------------------------------- */
// 2. Funciones Constructoras
function Personaclase(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
//metodo
Personaclase.prototype.saludar = function() {
    return `Hola, soy ${this.nombre}`;
}

const persona1 = new Personaclase("benjamin", 30);
console.log(persona1.saludar() , `tengo ${persona1.edad} años`);


/*------------------------------------------------------------------------------------*/

// 3. Object.create()

const personaProto= {
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};

const persona2 = Object.create(personaProto);
persona2.nombre = "ana";
persona2.edad = 30;

console.log(persona2.nombre, persona2.edad);

/*------------------------------------------------------------------------------------*/
// 4. Clases es6+

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `hola, soy ${this.nombre}`;
    }
}

const persona3 = new Persona("juan", "15");
console.log(persona3)
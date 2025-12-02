// PARA HACER `` ALT + 96
// PARA HACER `` ALT + 96
// PARA HACER `` ALT + 96
/*--------------------------------------------------------------------------------------------------------------------*/
/* Herencia prototipica en javascript(pre-es6):
- Antes de es6(que introdujo la sintaxis de clases), javascript utilizaba exclusivamente lo que se conoce como "herencia prototipica"
------------------------------------------------------------------------------------------------------------------------
En lugar de clases, Javascript tiene funciones contructoras y prototipos:
*/

//contructor de función
function Animal(nombre) {
    this.nombre = nombre;
}
const animal = new Animal("Criatura");
console.log(animal.nombre);

//metodo en el prototipo
Animal.prototype.hablar = function() {
    return "Algun sonido";
};

console.log(animal.hablar());

/*---------------------------------- */
//Constructor de funcion para subclase
function Perro(nombre){
    Animal.call(this,nombre); //lamar al constructor padre y recibe la propiedad de nombre
}

//Establecer la cadena de prototipos
Perro.prototype = Object.create(Animal.prototype); //creamos un nuevo objeto que hereda el prototipo de perro
Perro.prototype.constructor = Perro; //le asignamos un nuevo constructor a perro

/*---------------------------------- */
//Soobrescribir metodo hablar solo para perro
Perro.prototype.hablar = function() {
    return "Guau!";
}

const animal2= new Animal("gato");
console.log(animal2.nombre)
console.log(animal.nombre)

const perro=new Perro("Firulais");
console.log(perro.nombre);

//recordar que al ser un metodo, hay que ejecutar con ()
console.log(perro.hablar()); 



/*--------------------------------------------------------------------------------------------------------------------- */
// POST ES6
/*--------------------------------------------------------------------------------------------------------------------- */

class Personaje {

    constructor(nombre) {
        this.nombre = nombre; 
    }

    hablar() {
        return "Algun sonido";
    }
}

class Humano extends Personaje {
    hablar() {
        return "Sonido humano";
    }

    //metodo adicional
    correr() {
        return  `${this.nombre} esta corriendo`;
    }

    //otro metodo adicional, esta vez privado
    habilidadNormal() {
        return `${this.nombre} esta lanzando una habilidad`;
    }
}

const personaje1 = new Personaje("generico");
console.log(animal.hablar());

const personajeH = new Humano("Humanoide");
console.log(personajeH.hablar());
console.log(personajeH.correr());

console.log(personajeH.habilidadNormal());
console.log(personajeH.#Habilidadprivada);


/*--------------------------------------------------------------------------------------------------------------------- 
// Esto se ve casi identico a python, tenemos la palabra clave class,
   un metodo constructor, metodos de instancia y la palabra clave extends para la herencia.

   Pero aqui viene la revelacion importante: esta sintaxis de clases en javascript es simplemente " azucar sintactico" 
   sobre el sistema de prototipos subyacente, Por debajo, javascript sigue utilizando prototipos, no clases reales como en Python.

/*--------------------------------------------------------------------------------------------------------------------- 
   DIFERENCIAS CLAVE ENTRE PROTOTIPOS Y CLASES:
/*--------------------------------------------------------------------------------------------------------------------- 
   1. prototipos son objetos vivos:
        en javascript los prototipos son objetos vivos que pueden modificarse en tiempo de ejecucion:
/*--------------------------------------------------------------------------------------------------------------------- */

//Añadir un metodo a todas las intancias existentes
Animal.prototype.comer = function () {
    return `${this.nombre} esta comiendo`;
};

//ahora todas las instancias tienen acceso al nuevo metodo
console.log(animal.comer());
console.log(perro.comer());

/*--------------------------------------------------------------------------------------------------------------------- 
   2. Cadena de prototipos vs metodo de resolucion de orden (MRO):
        Javascript utiliza una cadena de prototipos simple para buscar propiedades y metodos:
/*--------------------------------------------------------------------------------------------------------------------- */
    //cadena de prototipos para 'perro'
    //perro -> Perro.prototype -> Animal.prototype -> Object.prototype -> null
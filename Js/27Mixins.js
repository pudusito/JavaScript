/*Patrones comunes en Javascript */
/*-------------------------------------------------------------------
Javascript tiene algunos patrones unicos que aprovechan su sistema de prototipos;
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------
Mixins:

Javascript no tiene herencia multiple como python, pero podemos usar mixins para compartir funcionalidad;
/*-------------------------------------------------------------------*/

//Mixin

const hablarMixin = {
    hablar() {
        return `${this.nombre} dice ${this.sonido}`;
    }
};

const nadarMixin = {
    nadar() {
        return `${this.nombre} esta nadando`;
    }
};

//Clase base 
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

//Aplicar mixins
class Pato extends Animal {
    constructor(nombre) {
        super(nombre);
        this.sonido = "Cuac";
    }
}

//Copiar metodos de los mixins
Object.assign(Pato.prototype, hablarMixin, nadarMixin);

const lucas = new Pato("Lucas");
console.log(lucas.hablar());
console.log(lucas.nadar());

/*---------------------------------------------------------------------------------------------------------- 
Factory Functions

un patron comun en js para evitar los problemas con this y crear objetos sin usar new:
/*--------------------------------------------------------------------------------------------------------------*/

function crearPersona(nombre, edad) {
    return {
        nombre,
        edad,
        saludar() {
            return `Hola, soy ${nombre}` ;
        }
    };
}

const ana= crearPersona("ana",30);
console.log(ana.saludar());
/*-------------------------------------------------------------*/

const Flecha = (nombre, edad) => {
    
    return {
        nombre,
        edad,
        despedirse() {
            return `chao ${nombre}`;
        }
    };
}

const persona = Flecha("plantilla", 0); 
console.log(persona.nombre);
console.log(persona.edad);
console.log(Flecha("benjamin").despedirse() );
console.log(persona.edad= 40);

const persona2 = Flecha("jose", 35);
console.log(persona2.despedirse(), persona2.edad);

/* ---------------------------------------------------------------*/
//Las funciones flecha son como las funciones lambda de python

//return explicito
const multiplicar = (x , y) => { return x * y };
console.log(multiplicar(3, 2)); // → 6

//return implicito
const sumar = (x, y) => x + y;
console.log(sumar(3, 5));
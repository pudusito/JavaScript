//el nombre de la clase utiliza Caps al inicio y en cada nueva palabra
class Persona_Clase{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

let persona1 = new Persona_Clase('Juan', 'Perez'); //inicializamos la clase, esto crea un objeto hijo
console.log(persona1);

let persona2 = new Persona_Clase('Jose', 'Lara');
console.log(persona2);
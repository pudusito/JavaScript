//recordar: No se aplica el concepto de hoisting
//No es posible crear objetos antes de declarar la clase
//let persona2 = new Persona_Clase('Karla', 'Juarez');

class Persona_Clase{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

};

let persona1 = new Persona_Clase('Juan', 'Perez'); 
persona1.nombre= 'Jose'; //set nombre
console.log(persona1);
console.log(persona1.nombre); //get nombre

let persona2 = new Persona_Clase('Jorge', 'Rodriguez');
persona2.apellido='Rojo'
console.log(persona2);
console.log(persona2.nombre, persona2.apellido)
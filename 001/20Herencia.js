
//clase padre
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

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
};

//clase hija
class Empleado extends Persona_Clase{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llama al constructor de la clase padre
        this._departamento = departamento
    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento = departamento
    }   

    //soobreescritura de metodo
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
};


//intanciamos la clase padre.
let persona1 = new Persona_Clase('Juan', 'Perez'); 
console.log(persona1);



//intanciamos la clase hija.
let empleado1 = new Empleado('Max', 'Pawell', 'Sistemas');
console.log(empleado1)
console.log(empleado1.nombre) //aqui podemos apreciar como se hereda los metodos de la clase padre
console.log(empleado1.nombreCompleto() ); //inicializamos el metodo de clase padre, pero se soobrescribe añadiendole departamento en la clase hija.

//clase padre
class Persona_Clase{ 

    static contadorObjetosPersona= 0; //esto es un atributo estatico de nuestra clase

    static get Max_Obj(){ //metodo estatico de solo lectura, no es posible modificarlo
        return 4;
    }

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;

        if (Persona_Clase.contadorObjetosPersona < Persona_Clase.Max_Obj){
            this.idPersona = ++Persona_Clase.contadorObjetosPersona; //pre incremento.
        }
        else{
            console.log('Se han superado el maximo de objetos permitidos')
        }

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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido
    }

    toString(){
        return this.nombreCompleto();
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
    
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
};


//intanciamos la clase padre.
let persona1 = new Persona_Clase('Juan', 'Perez'); 
console.log(persona1);
console.log(Persona_Clase.contadorObjetosPersona);

//intanciamos la clase hija.
let empleado1 = new Empleado('Max', 'Pawell', 'Sistemas');
console.log(empleado1)
console.log(empleado1.toString() );
console.log(Persona_Clase.contadorObjetosPersona);

//creamos un segundo objeto de la clase hijo.
let jefe = new Empleado('karla', 'Ramirez')
console.log(jefe);
console.log(jefe.toString() );
console.log(Persona_Clase.contadorObjetosPersona);


console.log(Persona_Clase.Max_Obj);
Persona_Clase.Max_Obj = 10;
console.log(Persona_Clase.Max_Obj); //aqui podemos apreciar como el metodo estatico de solo lectura no se modifica.

let empleado2 = new Empleado('Mariano', 'Ruiz');
console.log(empleado2);

let persona2 = new Persona_Clase('Laura', 'Quintero');
console.log(persona2);
console.log(persona2.toString() ); //podemos ver que NO se le asigno id ya que supero el maximo permitido del metodo.
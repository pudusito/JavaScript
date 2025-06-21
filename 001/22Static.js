//clase padre
class Persona_Clase{ 

    static contadorObjetosPersona= 0; //esto es un atributo estatico de nuestra clase

    email= 'valor default email'; //esto es un atributo no estatico de nuestros objetos

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona_Clase.contadorObjetosPersona++;
        console.log( ' se crea el objeto: ' + Persona_Clase.contadorObjetosPersona);
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

    static saludar(){
        console.log('hola mundo desde metodo static');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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

};


//intanciamos la clase padre.
let persona1 = new Persona_Clase('Juan', 'Perez'); 
console.log(persona1);


//intanciamos la clase hija.
let empleado1 = new Empleado('Max', 'Pawell', 'Sistemas');
console.log(empleado1)

// persona1.saludar(); //no es posible llamar un metodo static desde un objeto
//un metodo static solo se observa desde la consola, ya que se asocia con la clase y no el objeto, por ende, al intanciarla, lo hacemos desde la clase y no el objeto.
Persona_Clase.saludar();
Persona_Clase.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);


console.log(persona1.contadorObjetosPersona);
console.log(Persona_Clase.contadorObjetosPersona) ;
console.log(Empleado.contadorObjetosPersona); //las clases hijas tambien heredan los atributos estaticos.


//atributo no statico, este se asocia con el objeto
console.log(persona1.email);
console.log(empleado1.email);
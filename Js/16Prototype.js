function Persona(nombre = 'hijo', apellido = 'pe', email = 'hpe@gmail.com', edad = 12 ,  lenguage= 'RU'){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
    this.lenguage = lenguage;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
};

Persona.prototype.tel = '+569 44223311';


let padre = new Persona('Jorge', 'Maldonado', 'jmaldonado@gmail.com', '28');
console.log(padre.tel);

let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com', '30', 'en');
madre.tel = '+569 12345678'
console.log(madre.tel);
console.log(madre);
//funcion contructor de objetos
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

console.log(Persona); // aqui no pasa nada ya que no hemos inicializado el objeto.
let hijo = new Persona();
console.log(hijo)

let padre = new Persona('Jorge', 'Maldonado', 'jmaldonado@gmail.com', '28');
console.log(padre);

let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com', '30', 'en');
console.log(madre);
console.log(madre.nombreCompleto() );
console.log(madre);




/*----------------------------------*/
//           sintaxis js            
/*----------------------------------*/
//cada par hace lo mismo,           
// solo cambia la sintaxis.         
/*---------------------------------*/
let miCadena=  new String('Hola');  
let miCadena2 = 'Hola';             
/*---------------------------------*/
let miNumero = new Number(1);       
let miNumero2 = 1;
/*---------------------------------*/
let miBoolean= new Boolean(false);
let miBoolean2 = false;
/*---------------------------------*/
let miArreglo = new Array();
let miArreglo2= [];
/*----------------------------------*/
let miObjeto = new Object();
let miObjeto2= {};
/*----------------------------------*/
//***en JS las variables son de tipo dinamica, no es necesario especificar que tipo de datos son***

var str = "esto es una variable tipo string";
console.log(str);

str = 100;
console.log(str); //ahora es un dato numerico
console.log(typeof str)//typeof nos muestra el tipo de dato que imprime

var z = '';
console.log(z)
console.log(typeof z)

//tipo de dato numerico
var int = 10.5;
console.log(int)

//tipo de dato object
var object = {
    nombre : "Juan", 
    apellido : "perez", 
    telefono: "+569555"
}
console.log(object);

//tipo de dato boolean
var bandera = true;
console.log(typeof bandera);

//tipo de dato function
function miFuncion(){};
console.log(typeof miFuncion);

//tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//tipo de dato clase (las clases en js tambien son funciones)
class persona{
    constructor(nombre,apellido){
        this.nombre = nombre; //this es como self de python
        this.apellido = apellido;
    }
}
console.log(persona)

//tipo undefined
var x;
console.log(x);

x = undefined;
console.log(x);

//tipo null=ausencia de valor(pero su tipo de dato es object)
var y = null;
console.log(typeof y);

//arrays(los arrays tambien son objetos)

var autos=['bmw','audi','volvo'];
console.log(autos);
console.log(typeof autos);


/* 
##########################################################################################################
#                                                                                                        #
#   -JavaScript statements often start with a keyword to identify the JavaScript action to be performed. #
#   -Here is a list of some of the keywords you will learn about in this tutorial:                       #
#                                                                                                        #
#--------------------------------------------------------------------------------------------------------#
#    Keyword	   |          Description                                                                #
#--------------------------------------------------------------------------------------------------------#
#    var	       |          Declares a variable                                                        # antigua manera de declarar una variable
#    let	       |          Declares a block variable                                                  # manera de declarar una variable que se puede modificar.
#    const	       |          Declares a block constant                                                  # es como una tupla en python, no se puede modificar
#    if	           |          Marks a block of statements to be executed on a condition                  #
#    switch	       |          Marks a block of statements to be executed in different cases              #
#    for	       |          Marks a block of statements to be executed in a loop                       #
#    function	   |          Declares a function                                                        #
#    return	       |          Exits a function                                                           #
#    try	       |          Implements error handling to a block of statements                         #
#                  |                                                                                     #
##########################################################################################################
*/
        

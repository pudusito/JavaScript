//hoisting
miFuncion(3, 4)

//declaracion de la funcion, usa camelcase
function miFuncion(a, b){
    console.log("suma: " + (a + b));//como contiene un str, necesitamos darle prioridad a las variables numericas para lograr la suma
}//los bloques de codigo no terminan con ;

//*****llamando a la funcion************
miFuncion(1, 2);//las lineas que se van a ejecutar si llevan ;

/*--------------------------------------------------------------*/

//declaracion de la funcion
function funcionsita(c, d){
    return c + d;//return se agrega de manera implicita(automatica), no es necesario para la suma, pero si para retornar otros valores como str
}

//llamando a la funcion
let resultado = funcionsita(2, 3);
console.log(resultado);


/*-------------------------------------------------------------*/

//declaracion funcion de tipo expresion(ANONIMA o sin nombre)
let x = function (a, b){return a + b};

//asignamos valores de la funcion y los guardamos en una variable
resultado = x(3, 3);

//imprimimos la variable
console.log(resultado);

/*-------------------------------------------------------------*/
//funcion de tipo expresion ejemplo 2

let sumar = function(a,b){return a +b};

resultado = sumar (1, 2);
console.log(resultado);

/*-------------------------------------------------------------*/

//funciones de tipo flecha //parecida a una funcion tipo expresion pero al ser => no es necesario usar function ni return, tampoco llaves.
const sumarFuncionTipoFlecha= (a , b) => a + b;
resultado = sumarFuncionTipoFlecha(3,5)
console.log(resultado);

/*-------------------------------------------------------------*/

// Funciones self invoking (es una funcion Anonima que se puede llamar a si mismo.)
(function(a , b){
    console.log('ejecutando funcion self invoking:' + (a + b))})
(3 , 4); //ejecutamos la funcion con ();

/*-------------------------------------------------------------*/

//una funcion es un tipo de dato.
console.log(typeof miFuncion); 

//pero tambien las funciones pueden ser descritas como objetos, y los objetos pueden tener propiedades y tener metodos asociados a cada uno de los objetos
objecto(1,5)
function objecto(a , b){
    console.log(arguments.length);
    return a + b;
};

//recordar que funcion y metodo es lo mismo.
var miFuncionTexto= objecto.toString();
console.log(miFuncionTexto)








/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
/* recordatorio:
parametros: lista de valores que va a recibir una funcion
argumentos: lista de valores que pasamos cuando mandamos a llamar la funcion
*/

let multiplicacion = function argumentos(parametroA= 5 ,parametroB= 6){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return parametroA * parametroB + arguments[2];
};

resultado = multiplicacion(2 ,3 , 4);
console.log(resultado);


/*-------------------------------------------------------------*/

let resulta2 = sumarTodo(5, 4, 13 , 10 , 9, 10);
console.log(resulta2);

function sumarTodo(){
    let suma= 0;
    for(let i = 0; i < arguments.length; i++){ //iteramos cada elemento del arreglo.
        suma += arguments[i];// suma = suma + arguments[i]
    };
    return suma;
};

/*-------------------------------------------------------------*/

























/* 
Hoisting:
-El hoisting en JavaScript es un mecanismo que mueve las declaraciones de variables, funciones y clases al principio de su ámbito antes de ejecutar el código. 
Esto permite usarlas antes de que se declaren. 

-El hoisting puede afectar el flujo de ejecución y el alcance de las variables y funciones. 

-Para entender cómo funciona el hoisting, es necesario comprender el contexto de ejecución. 
Este es el entorno que prepara el motor de JavaScript para ejecutar el código. 

-El hoisting funciona de manera diferente si la declaración de la variable se realiza mediante let o const: 

*Con var, el valor se inicializa a indefinido durante la fase de creación.
*Con let y const, el valor solo se inicializa durante la fase de ejecución.

-Para evitar errores, se recomienda declarar las variables al principio del bloque de código y utilizar let y const para la declaración de variables. 

*/


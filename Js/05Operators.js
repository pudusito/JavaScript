// es mayor o igual?
let edad = 18, adulto = 18;

if( edad >= adulto ){
    console.log( "Es un adulto" );
}
else{
    console.log( "Es menor de edad" );
}

//operador AND(&&), regresa true si solo ambos operandos son true

let a = 15;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}

//operador OR(||), regresa true si cualquier operando es true
let vacaciones = false, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("padre puede asistir al juego del hijo");
}
else{
    console.log("el padre esta ocupado");
}

//operador ternario(3 partes de la expresion)
let resultado =(3>2) ? "verdadero" : "falso";
console.log(resultado);

 
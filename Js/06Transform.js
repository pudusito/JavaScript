//convertir str a interger 

let miNumero = "18";
 
let edad = Number(miNumero);

if(edad >= 18){
	 console.log("Puede votar");
}
else{
	 console.log("Muy joven para votar");
}
 
let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
console.log( resultado );



/*
Funcion isNaN:
La función isNaN() de JavaScript verifica si un valor es NaN (No es un Número). Devuelve true si el valor es NaN y false si es un número.
*/

/*

let miNumero = "18";
 
let edad = Number(miNumero);

if( isNaN(edad)){
    console.log("No es un número");
}
else{
    if(edad >= 18){
        console.log("Puede votar");
   }
   else{
        console.log("Muy joven para votar");
   }
}

*/

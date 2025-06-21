/* un arreglo en js es un tipo object que permite almacenar varios valores*/

// let autos = new Array('bmw','mercedes benz','volvo'); //forma antigua
const autos = ['bmw','mercedes benz','volvo'];//forma nueva

//acceder a valores del array:
console.log(autos);
console.log(autos[0]);
console.log(autos[2]);

//recorrer cada uno de los elementos:
for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}


//modificar valores del array:
autos[1] = 'Ferrari';
console.log(autos[1]);

autos.push('Audi');//se agrega el valor al final del array
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'cadillac'; //agregar a nivel superior
console.log(autos);

autos[6] = 'porshe'; //seleccionar espacio
console.log(autos);


console.log(typeof autos);//se pregunta que tipo es nuestra variable

console.log( Array.isArray(autos));//se pregunta si la variable que estamos trabajando realmente es un arreglo

console.log( autos instanceof Array);//se pregunta si la instancia es de X tipo.


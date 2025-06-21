//tipos primitivos(no se  pueden asociar propiedades o metodos a este valor)
let x= 10;

function cambiarValor(a){
    a=20; //no se puede utilizar fuera del metodo.
};

//paso por valor 
//simplemente queremos decir que la variable X no sufre ningun cambio.
cambiarValor(x);
console.log(x);
// console.log(a);

/*------------------------------------------------------------------------------------*/

//paso por referencia

const persona = {
    nombre: 'juan' ,
    apellido: 'perez'
};

function cambiarValorObjeto(p1){
    p1.nombre = 'carlos';
    p1.apellido = 'Jara'
};

//aqui le pasamos la variable persona a la funcion cambiar objeto, esto se le entrega en el parametro p1(haciendo referencia a persona)
// luego se accede al valor del argumento(p1.nombre) y lo sobreescribimos
cambiarValorObjeto(persona);
console.log(persona);


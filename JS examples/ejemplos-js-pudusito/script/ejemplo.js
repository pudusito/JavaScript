console.log("asddd");
alert("alerta");

// soy un comentario
/** 
 * 
 * comentario 2
 */

let nombre = "hola";
const pi = 3.14;
nombre= 23;
//pi = 24 /** no se puede sobreescribir una variable tipo const */

let apellido;
//const; a una variable const se debe asignar un valor fijo

apellido= "arriagada";
let edad = prompt ("ingrese su edad: " , 0);
console.log("su edad es : " + edad);
console.log("el proximo año tendrá: " + (edad+1 ));
let cont= 1;
console.log("cont=" + cont)
cont++;
console.log ("cont++=" + cont);


//documentacion personal
/* Orden de prioridad de operadores en JavaScript (de mayor a menor):

1. ()                                                - Paréntesis (agrupación)
2. . [] ()                                           - Acceso a propiedades, llamada de funciones
3. new (con argumentos)
4. ++ --                                             - Incremento/Decremento (postfijo)
5. ! ~ + - ++                                        - typeof void delete - Operadores unarios
6. **                                                - Exponenciación
7. * / %                                             - Multiplicación, División, Módulo
8. + -                                               - Suma, Resta
9. << >> >>>                                         - Desplazamientos de bits
10. < <= > >= in instanceof                          - Comparaciones
11. == != === !==                                    - Igualdad
12. &                                                - AND a nivel de bits
13. ^                                                - XOR a nivel de bits
14. |                                                - OR a nivel de bits
15. &&                                               - AND lógico
16. ||                                               - OR lógico
17. ??                                               - Nullish coalescing (fusión nula)
18. ?:                                               - Operador ternario
19. = += -= *= /= %= <<= >>= >>>= &= ^= |= ??=       - Asignación
20. ,                                                - Operador coma

--------------------------------------------------------------------------------------
| operators        |     description                             |    associativity  |
-------------------------------------------------------------------------------------|
| ()               |   Function call                             |    Left to right  |
| []               |   Array Subscript                           |         ||        |
| .                |   object property access                    |         ||        |
| new              |   Memory Allocation                         |         ||        |
-------------------------------------------------------------------------------------|
| ++ --            |  Increment / Decrement                      |   Right to Left   |
| + -              |  Unary Plus / Minus                         |         ||        |
| !  ~             | Logical negation / bitwise complement       |         ||        |
| delete           | Deallocation                                |         ||        |
| typeof           | Find type of variable                       |         ||        |
| void             |                                             |         ||        |
|------------------------------------------------------------------------------------|
| *                |  Multiplication                             |    Left to right  |
| /                |  Division                                   |         ||        |
| %                |  Modulo                                     |         ||        |
--------------------------------------------------------------------------------------
| + -              | Addition / Substraction                     |    Left to right  |
|------------------------------------------------------------------------------------|
| >>                | Bitwise Right Shift                        |    Left to right  |
| <<                | Bitwise Left Shift                         |         ||        |
|------------------------------------------------------------------------------------|
| < <=              | Relational Less Than/ Equal To             |    Left to right  |
| > >=              | Relational Greater / Greater than Equal To |         ||        |
|------------------------------------------------------------------------------------|
| ==                | Equiality                                  |    Left to right  |
| !=                | Inequality                                 |         ||        |
| ===               | Identity Operator                          |         ||        |
| !==               | Non identity Operator                      |         ||        |
-------------------------------------------------------------------------------------- 
*/
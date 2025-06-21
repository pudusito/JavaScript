/*

operator       description

+               suma
-               resta
*               multiplicacion
**               exponente
/               divicion
%                  modulo(residuo de la div)
++                  incremento
--                  decremento 
*/


/*operadores de incremento y decremento
a = 1;

// post incremento
b = a++;

//   pre incremento
b = ++a;

// post decremento
c = a--;

// pre decremento
c = --a;

*/


// al evaluar una expresion de izq a derecha, los operadores funcionanan como en algebra, toma prioridad matematicamente, 
// y los () al igual que en algebra, toman prioridad primero.

/*

Orden de prioridad de operadores en JavaScript (de mayor a menor):

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


/*Operadores de asignacion compuesto*/
 
let y = 1;

y += 3; // a = a + 3
console.log(a);//esto nos muestra 4

y -= 2; // a = a - 2
console.log(a);//ahora nos muestra 2

/* operadores de comparacion*/
/*
let a = 3, b = 3, c = "3";

let z = a == b; // se revisa el valor sin importar el tipo de dato
console.log(z);

z = a === c; // se revisa si los valores son iguales pero tambien los tipos de datos
console.log(z);


let z = 3 !=4 //es diferente? sin importar el tipo de dato

let z = a !==c // es diferente? pero revisa el tipo de dato

*/











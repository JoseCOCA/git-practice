// tipos de datos primitivos 
// variables 
var x = 1;
let y = 2 + 3 - 2 / 3 + x;
let n = true;
let e = false;

// Tarea: Investigar la diferencia entre let y var en javascript

// cadena de texto o string
const f = "hola";

// PENDIENTE: ver en los metodos de una string 
f.includes('ho')
console.log(f.length)


// reasignacion de variable
y = ['sja', f]

// Comentatio una linea
/**
 * comentario grande
 * 
 *  
 */


// DEFINICION DE ARREGLOS
var r = [1,2,3,4,5,6,7,8,9];

// indices en arreglos
r[0] // 1 
r[1] // 2


// PENDIENTE: ver los metodos de un arreglo
r.includes()
r.length

// TRABAJAR CON ARREGLOS EN LA SIGUIENTE CLASE
let objt = {
    property1 : 1,
    property2: 2.0,
    property3: false,
    property3: [2, '23i23', 2.3 ],
    property1: function () {
    }
}

// OBJETOS
// propiedades de objetos
    // notacion punto / dot notation 
    objt.property4 = 'asignacion'; 
    objt.property3 = true;
    // array notation
    objt['property1'] = 2;
    objt['property5'] = 5;

    const prop1 = objt['property1'] // objt.property1



// switch (x) {
//     case 1:
//         objt.property1 = 2;
//         break;
//     case 2:
//         objt.property1 = 3;
//     break;
//     default:

//         break;
// }
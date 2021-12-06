/**
 * @challenge: Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
 * 
 * @version: 1.2.0
 * @author: Abril Herrada
 * @date: 28/11/2021
 *
 * History:
 *  - v1.0.0: Primera entrega
 *  - v1.1.0: Segunda entrega
 *  - v1.2.0: Tercera entrega
 */

for (let studentNumber = 1; studentNumber <= 6; studentNumber++) {
    let studentName = prompt("Ingresá el nombre del estudiante.");
    while (studentName == null || studentName == "") {
        studentName = prompt("No ingresaste un nombre. Completá el campo para continuar.")
    }
    console.log("Estudiante número " + studentNumber + ": " + studentName);
    switch (studentNumber % 2 === 0) {
        case false:
            continue;
        case true:
            console.log("Nota: " + studentName + " tiene un número de estudiante par, por lo que recibe un 10% de descuento en el curso.");
        default:
            break;
    }
}
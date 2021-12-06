/**
 * @challenge: Crear un algoritmo simple. Crea un script en JS que le solicite al usuario ingresar datos y luego, mediante JavaScript, realiza operaciones sobre los mismos.
 * 
 * @version: 1.0.0
 * @author: Abril Herrada
 * @date: 23/11/2021
 *
 * History:
 *  - v1.0.0: Primera entrega
 */

//Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. 

let userName = prompt("Escribí tu nombre.");
let userLastname = prompt("Escribí tu apellido.");
console.log("¡Hola, " + userName + "! Bienvenido a nuestro sitio de reservas.");

//Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.

let group = parseInt(prompt("¿Cuántas personas te van a acompañar?"));
let reservingPerson = 1;
console.log("¡Listo, " + userName + "! Tu reserva para " + (group + reservingPerson) + " personas se realizó correctamente.");


//Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.

alert("Datos de tu reserva:\nTu reserva para " + (group + reservingPerson) + " personas está a nombre de " + userName + " " + userLastname + " y es para las 22 h.\n¡Te esperamos!");
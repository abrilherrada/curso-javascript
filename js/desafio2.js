/**
 * @challenge: Crear un algoritmo con un condicional. Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresados y las condiciones cumplidas.
 * 
 * @version: 1.1.0
 * @author: Abril Herrada
 * @date: 25/11/2021
 *
 * History:
 *  - v1.0.0: Primera entrega
 *  - v1.1.0: Segunda entrega
 */

let weight = prompt("Ingresá tu peso en kilogramos.");
let height = prompt("Ingresá tu altura en metros.");
let IMC = weight/(height*height);

if (weight == null || weight == "") {
    alert("Apretaste continuar sin escribir tu peso o apretaste cancelar. Completá el campo para continuar.");
}
if (height == null || height == "") {
    alert("Apretaste continuar sin escribir tu altura o apretaste cancelar. Completá el campo para continuar.");
}
if (IMC <= 18.4) {
    alert("Tu Índice de Masa Corporal es " + IMC.toFixed(2) + ".\nEste número te ubica en la categoría de peso inferior al normal.");
}
else if (IMC >= 18.5 && IMC <=24.9) {
    alert("Tu Índice de Masa Corporal es " + IMC.toFixed(2) + ".\nEste número te ubica en la categoría de peso normal.");
}
else if (IMC >= 25 && IMC <= 29.9) {
    alert("Tu Índice de Masa Corporal es " + IMC.toFixed(2) + ".\nEste número te ubica en la categoría de peso superior al normal.");
}
else if (IMC >= 30) {
    alert("Tu Índice de Masa Corporal es " + IMC.toFixed(2) + ".\nEste número te ubica en la categoría de obesidad.");
}
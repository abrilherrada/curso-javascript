/**
 * @challenge:
 * Desafío entregable:
 * - Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
 * - Utilizar funciones para realizar esas operaciones.
 * 
 * Desafío complementario:
 * Codifica al menos tres funciones cuyas instrucciones permitan resolver un problema particular, segmentado en tareas. La información a procesar debe ser ingresada por el usuario, y el resultado del procesamiento visualizado en una salida.
 * 
 * @version: 1.3.0
 * @author: Abril Herrada
 * @date: 02/12/2021
 *
 * History:
 *  - v1.0.0: Primera entrega
 *  - v1.1.0: Segunda entrega
 *  - v1.2.0: Tercera entrega
 *  - v1.3.0: Cuarta entrega
 */

let precioProducto1 = 1000;
let precioProducto2 = 5000;
let precioProducto3 = 1500;
let precioProducto4 = 2000;
let precioProducto5 = 1000;
let precioProducto6 = 2200;
let precioProducto7 = 1800;
let precioProducto8 = 4900;
let totalProducto;
let precioFinal;

function total(precioProducto, cantidad) {
    totalProducto = precioProducto * cantidad;
    return totalProducto;
}
function descuento(precioTotal) {
    precioFinal = precioTotal - (precioTotal * 0.5);
    return precioFinal;
}
function monto() {
    alert("El precio final es: $" + precioFinal + ".");
}

producto = parseInt(prompt("Ingresá el número del producto que quieras comprar o 0 para salir:\n1. Collar\n2. Correa extensible\n3. Correa y pretal\n4. Plato doble\n5. Plato lento\n6. Pelota\n7. Hueso\n8. Cama\nSi comprás 5 o más productos, te damos un 50% de descuento."));

switch (producto){
    case 0:
        break;
    case 1:
        cantidad = parseInt(prompt("¿Qué cantidad querés comprar?"));
        total(precioProducto1, cantidad);
        if (cantidad >= 5) {
            descuento(totalProducto);
        }else {
            precioFinal = totalProducto;
        }
        monto();
        break;
    case 2:
        cantidad = parseInt(prompt("¿Qué cantidad querés comprar?"));
        total(precioProducto2, cantidad);
        if (cantidad >= 5) {
            descuento(totalProducto);
        }else {
            precioFinal = totalProducto;
        }
        monto();
        break;
    case 3:
        cantidad = parseInt(prompt("¿Qué cantidad querés comprar?"));
        total(precioProducto3, cantidad);
        if (cantidad >= 5) {
            descuento(totalProducto);
        }else {
            precioFinal = totalProducto;
        }
        monto();
        break;
    case 4:
        cantidad = parseInt(prompt("¿Qué cantidad querés comprar?"));
        total(precioProducto4, cantidad);
        if (cantidad >= 5) {
            descuento(totalProducto);
        }else {
            precioFinal = totalProducto;
        }
        monto();
        break;
    case 5:
        cantidad = parseInt(prompt("¿Qué cantidad querés comprar?"));
        total(precioProducto5, cantidad);
        if (cantidad >= 5) {
            descuento(totalProducto);
        }else {
            precioFinal = totalProducto;
        }
        monto();
        break;
    case 6:
        cantidad = parseInt(prompt("¿Qué cantidad querés comprar?"));
        total(precioProducto6, cantidad);
        if (cantidad >= 5) {
            descuento(totalProducto);
        }else {
            precioFinal = totalProducto;
        }
        monto();
        break;
    case 7:
        cantidad = parseInt(prompt("¿Qué cantidad querés comprar?"));
        total(precioProducto7, cantidad);
        if (cantidad >= 5) {
            descuento(totalProducto);
        }else {
            precioFinal = totalProducto;
        }
        monto();
        break;
    case 8:
        cantidad = parseInt(prompt("¿Qué cantidad querés comprar?"));
        total(precioProducto8, cantidad);
        if (cantidad >= 5) {
            descuento(totalProducto);
        }else {
            precioFinal = totalProducto;
        }
        monto();
        break;
    default:
        break;
}
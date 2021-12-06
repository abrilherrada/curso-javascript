/**
 * @challenge: A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
 * - Crear al menos un objeto para controlar el funcionamiento de tu simulador
 * - Incorporarle sus propiedades y su constructor.
 * - Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
 * - Utilizar sus mètodos.
 * 
 * @version: 1.4.0
 * @author: Abril Herrada
 * @date: 06/12/2021
 *
 * History:
 *  - v1.0.0: Primera entrega
 *  - v1.1.0: Segunda entrega
 *  - v1.2.0: Tercera entrega
 *  - v1.3.0: Cuarta entrega
 *  - v1.4.0: Quinta entrega
 */

class Product {
    constructor (name, price, total) {
        this.name = name;
        this.price = parseInt(price);
        this.total = total;
    }
    totalProduct (quantity) {
        this.total = this.price * quantity;
    }
}

const product1 = new Product ("collar", "1000");
const product2 = new Product ("correa extensible", "5000");
const product3 = new Product ("correa pretal", "1500");
const product4 = new Product ("plato doble", "2000");
const product5 = new Product ("plato lento", "1000");
const product6 = new Product ("pelota", "2200");
const product7 = new Product ("hueso", "1800");
const product8 = new Product ("cama", "4900");
let finalTotal = 0;
let finalSum = 0;

function discount() {
    finalSum = finalTotal * 0.75;
}
function sum() {
    alert("El precio final es $" + finalSum + ".");
}

let product = parseInt(prompt("Ingresá el número del producto que quieras comprar o 0 para salir:\n1. Collar\n2. Correa extensible\n3. Correa y pretal\n4. Plato doble\n5. Plato lento\n6. Pelota\n7. Hueso\n8. Cama\nSi tu compra supera los $10.000, te damos un 25% de descuento."));

while (product !== 0) {
    switch (product){
        case 1:
            product1.totalProduct(parseInt(prompt("¿Cuántas unidades querés?")));
            finalTotal = finalTotal + product1.total;
            break;
        case 2:
            product2.totalProduct(parseInt(prompt("¿Cuántas unidades querés?")));
            finalTotal = finalTotal + product2.total;
            break;
        case 3:
            product3.totalProduct(parseInt(prompt("¿Cuántas unidades querés?")));
            finalTotal = finalTotal + product3.total;
            break;
        case 4:
            product4.totalProduct(parseInt(prompt("¿Cuántas unidades querés?")));
            finalTotal = finalTotal + product4.total;
            break;
        case 5:
            product5.totalProduct(parseInt(prompt("¿Cuántas unidades querés?")));
            finalTotal = finalTotal + product5.total;
            break;
        case 6:
            product6.totalProduct(parseInt(prompt("¿Cuántas unidades querés?")));
            finalTotal = finalTotal + product6.total;
            break;
        case 7:
            product7.totalProduct(parseInt(prompt("¿Cuántas unidades querés?")));
            finalTotal = finalTotal + product7.total;
            break;
        case 8:
            product8.totalProduct(parseInt(prompt("¿Cuántas unidades querés?")));
            finalTotal = finalTotal + product8.total;
            break;
        default:
            break;
    }
    product = parseInt(prompt("¿Querés agregar más productos a tu compra? Ingresá 0 si no querés agregar más productos.\n1. Collar\n2. Correa extensible\n3. Correa y pretal\n4. Plato doble\n5. Plato lento\n6. Pelota\n7. Hueso\n8. Cama"));
}

if (finalTotal > 0 && finalTotal >= 10000) {
    discount();
    sum();
}
else if (finalTotal > 0 && finalTotal < 10000) {
    finalSum = finalTotal;
    sum();
}
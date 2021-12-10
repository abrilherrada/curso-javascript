/**
 * @challenge:
 * DESAFÍO
 * - Incorporar al menos un Array en tu proyecto.
 * - Utilizar algunos de los métodos o propiedades vistos en la clase.
 * 
 * DESAFÍO COMPLEMENTARIO:
 * Codificar una función cuyas instrucciones permitan ordenar una colección (array). Preferentemente, recibir el criterio de ordenamiento por parámetro, y mostrar el resultado del procesamiento en una salida.
 * 
 * PRIMERA ENTREGA DEL PROYECTO FINAL:
 * Capturar entradas mediante prompt().
 * Declarar variables y objetos necesarios para simular el proceso seleccionado.
 * Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
 * Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().
 * 
 * @version: 1.5.0
 * @author: Abril Herrada
 * @date: 09/12/2021
 *
 * History:
 *  - v1.0.0: Primera entrega
 *  - v1.1.0: Segunda entrega
 *  - v1.2.0: Tercera entrega
 *  - v1.3.0: Cuarta entrega
 *  - v1.4.0: Quinta entrega
 *  - v1.5.0: Sexta entrega
 */

//CLASE DE PRODUCTO
class Product {
    constructor (id, name, price, stock) {
        this.id = parseInt(id);
        this.name = name;
        this.price = parseInt(price);
        this.stock = parseInt(stock);
    }
    availableStock (quantity) {
        if (quantity > this.stock) {
            return false;
        }
        else {
            return true;
        }
    }
}

//ARRAYS DE PRODUCTOS Y DE CARRITO
const products = [
    new Product ("1", "Collar", "1000", "5"),
    new Product ("2", "Correa extensible", "5000", "10"),
    new Product ("3", "Correa pretal", "1500", "15"),
    new Product ("4", "Plato doble", "2000", "8"),
    new Product ("5", "Plato lento", "1000", "12"),
    new Product ("6", "Pelota", "2200", "20"),
    new Product ("7", "Hueso", "1800", "18"),
    new Product ("8", "Cama", "4900", "4"),
]
const cart = [];

//Variables globales que se utilizarán en diversas funciones para calcular el total a pagar
let total = 0;
let finalTotal = 0;

//FUNCIONES
//Función que calcula el total a pagar (sin descuento) según el precio de cada producto y la cantidad que desea el usuario
const findTotal = () => {
    cart.forEach(item => {
        total = total + item.price * item.quantity;
    });
    return total;
}
//Función que calcula el total a pagar (con descuento) según el total sin descuento y el porcentaje de descuento que se ingrese
const discount = (percentage) => {
    finalTotal = total * ((100 - percentage) / 100);
}
//Función que muestra el total final mediante un alert()
const sum = () => {
    alert(`El precio final es $${finalTotal}.`);
}
//Función que ordena alfabéticamente los productos agregados al carrito y crea el código HTML del resumen de compra que se imprimirá en el sitio
const purchaseSummary = () => {
    cart.sort((product1, product2) => (product1.name < product2.name) ? -1 : 1);
    let purchase = "";
    cart.forEach(item => {
        purchase = purchase +
        `<tr>
            <th scope="row">${item.name}</th>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
        </tr>`;
    });
    purchase = purchase +
    `<tr class="table-active">
        <th scope="row"></th>
        <td></td>
        <td>Total sin descuento</td>
        <td>${total}</td>
    </tr>
    <tr class="table-active">
        <th scope="row"></th>
        <td></td>
        <td>Descuento (25%)</td>
        <td>${finalTotal - total}</td>
    </tr>
    <tr class="table-active">
        <th scope="row"></th>
        <td></td>
        <td><strong>Total final</strong></td>
        <td>${finalTotal}</td>
    </tr>`;
    return purchase;
}

//Variable que almacena cuál producto quiere comprar el usuario, lo cual el usuario introduce mediante un prompt()
let product = parseInt(prompt("Ingresá el número del producto que quieras comprar o 0 para salir:\n1. Collar\n2. Correa extensible\n3. Correa y pretal\n4. Plato doble\n5. Plato lento\n6. Pelota\n7. Hueso\n8. Cama\nSi tu compra supera los $10.000, te damos un 25% de descuento."));

//Bucle que crea un objeto por cada producto que el usuario agrega al carrito y lo almacena en el array correspondiente al carrito con el nombre, el precio y la cantidad de unidades de cada producto. Antes, se verifica que la cantidad solicitada no supere la cantidad en stock mediante un método
while (product !== 0) {
    switch (product){
        case 1:
            quantity = parseInt(prompt("¿Cuántas unidades querés?"))
            while (!products[0].availableStock(quantity)) {
                quantity = prompt(`Lo sentimos. En este momento, solo contamos con ${products[0].stock} unidades en stock. Ingresá una cantidad menor o igual.`)
            }
            cart.push({name: products[0].name, price: products[0].price, quantity: quantity});
            break;
        case 2:
            quantity = parseInt(prompt("¿Cuántas unidades querés?"))
            while (!products[1].availableStock(quantity)) {
                quantity = prompt(`Lo sentimos. En este momento, solo contamos con ${products[1].stock} unidades en stock. Ingresá una cantidad menor o igual.`)
            }
            cart.push({name: products[1].name, price: products[1].price, quantity: quantity});
            break;
        case 3:
            quantity = parseInt(prompt("¿Cuántas unidades querés?"))
            while (!products[2].availableStock(quantity)) {
                quantity = prompt(`Lo sentimos. En este momento, solo contamos con ${products[2].stock} unidades en stock. Ingresá una cantidad menor o igual.`)
            }
            cart.push({name: products[2].name, price: products[2].price, quantity: quantity});
            break;
        case 4:
            quantity = parseInt(prompt("¿Cuántas unidades querés?"))
            while (!products[3].availableStock(quantity)) {
                quantity = prompt(`Lo sentimos. En este momento, solo contamos con ${products[3].stock} unidades en stock. Ingresá una cantidad menor o igual.`)
            }
            cart.push({name: products[3].name, price: products[3].price, quantity: quantity});
            break;
        case 5:
            quantity = parseInt(prompt("¿Cuántas unidades querés?"))
            while (!products[4].availableStock(quantity)) {
                quantity = prompt(`Lo sentimos. En este momento, solo contamos con ${products[4].stock} unidades en stock. Ingresá una cantidad menor o igual.`)
            }
            cart.push({name: products[4].name, price: products[4].price, quantity: quantity});
            break;
        case 6:
            quantity = parseInt(prompt("¿Cuántas unidades querés?"))
            while (!products[5].availableStock(quantity)) {
                quantity = prompt(`Lo sentimos. En este momento, solo contamos con ${products[5].stock} unidades en stock. Ingresá una cantidad menor o igual.`)
            }
            cart.push({name: products[5].name, price: products[5].price, quantity: quantity});
            break;
        case 7:
            quantity = parseInt(prompt("¿Cuántas unidades querés?"))
            while (!products[6].availableStock(quantity)) {
                quantity = prompt(`Lo sentimos. En este momento, solo contamos con ${products[6].stock} unidades en stock. Ingresá una cantidad menor o igual.`)
            }
            cart.push({name: products[6].name, price: products[6].price, quantity: quantity});
            break;
        case 8:
            quantity = parseInt(prompt("¿Cuántas unidades querés?"))
            while (!products[7].availableStock(quantity)) {
                quantity = prompt(`Lo sentimos. En este momento, solo contamos con ${products[7].stock} unidades en stock. Ingresá una cantidad menor o igual.`)
            }
            cart.push({name: products[7].name, price: products[7].price, quantity: quantity});
            break;
        default:
            break;
    }
    product = parseInt(prompt("¿Querés agregar más productos a tu compra? Ingresá 0 si no querés agregar más productos.\n1. Collar\n2. Correa extensible\n3. Correa y pretal\n4. Plato doble\n5. Plato lento\n6. Pelota\n7. Hueso\n8. Cama"));
}

findTotal();

//Condicional que evalúa si corresponde aplicar el descuento al total a pagar e imprime el total a pagar en un alert()
if (total >= 10000) {
    discount(25);
    sum();
}
else if (total > 0 && total < 10000) {
    finalTotal = total;
    sum();
}

document.getElementById("tableBody").innerHTML = purchaseSummary();



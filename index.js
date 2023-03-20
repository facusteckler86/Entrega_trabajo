// modelo de carrito de compra para panaderia

//saludo inicial.

let usuario = prompt("Hola, Bienvenido, indique su usuario");

while (usuario != "Facundo") {
    alert("El usuario es incorrecto");
    }
//constructor de productos.

const productos=[
    
{id: 1, nombre: "pan de campo",precio: 750},
{id: 2, nombre: "medialunas",precio: 1500},
{id: 3, nombre: "sanguches",precio: 350},
{id: 4, nombre: "rosquitas",precio: 500},
    
];

//consulto que producto de los 3 en tienda on-line quiere, mediante un prompt

let consulta = prompt("Ingrese que producto desea");
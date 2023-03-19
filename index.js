// modelo de carrito de compra para panaderia

//saludo inicial.

panaderia = cargaClientes ();

let mensaje = "Bienvenid@: ";

for (let i = 0; i < panaderia.length; i++) {
    mensaje += `${panaderia[i].nombre} (${panaderia[i].localidad}provincia)`;
}

    alert(mensaje);
    consultas();


// carga de usuario

function nuevoCliente () {

    let panaderia = [];
    let user = true;

    while (user) {
        let DNI = Number (prompt("Ingrese su DNI"));
        let NOMBRE = prompt("Ingrese su Nombre Completo");
        let DOMICILIO = prompt ("Ingrese su Domicilio ");

        return panaderia
        
    }
    
}

//constructor de productos.

const productos=[
    
{id: 1, nombre: "pan de campo",precio: 750},
{id: 2, nombre: "medialunas",precio: 1500},
{id: 3, nombre: "sanguches",precio: 350},
{id: 4, nombre: "rosquitas",precio: 500},
    
];

//consulto que producto de los 3 en tienda on-line quiere, mediante un prompt

let productos = prompt("Ingrese que producto desea");

//pan de campo

const productos1 = new productos (pan de campo: "pan de campo",precio: 300,imagen: imagen);
console.log(prompt("productos1"));
alert ("El producto ingresado es " + productos1);

// medialunas

const productos2 = new productos (medialunas: "medialunas", precio: 600 , imagen: imagen);
console.log(prompt("productos2"));
alert ("El producto ingresado es " + productos2);

//sanguches

const productos3 = new productos (sanguches: "sanguches",precio: 250,imagen: "imagen");
console.log(prompt("productos3"));
alert ("El producto ingresado es " + productos3);
// modelo de carrito de compra para panaderia

class productos{

constructor(pan de campo, medialunas, sanguches, precio, imagen){

this.pan de campo = pan de campo;
this.medialunas = medialunas;
this.sanguches = sanguches;
this.precio = precio;
this.imagen = imagen;
this.vendido = false;

}
let productos = prompt("Ingrese que producto desea");


const productos1 = new productos (pan de campo: "pan de campo", precio : 300, imagen: imagen);
console.log(prompt("productos1"));
alert ("El producto ingresado es " + productos1);

const productos2 = new productos (medialunas: "medialunas", precio : 600 , imagen: imagen);
console.log(prompt("productos2"));
alert ("El producto ingresado es " + productos2);

const productos3 = new productos (sanguches: "sanguches", precio: 250, imagen: "imagen");
console.log(prompt("productos3"));
alert ("El producto ingresado es " + productos3);
}

let productos = document.getElementsByClassName("productos");

console.log(productos[0].innerHTML);
console.log(productos[1].innerHTML);
console.log(productos[2].innerHTML);
let cleave = new Cleave('#num-cart', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        console.log(type);
        var tarjetaVisa = document.getElementById('tarjeta-visa');
        var tarjetaMastercard = document.getElementById('tarjeta-mastercard');
        var tarjetaAmex = document.getElementById('tarjeta-amex');
        switch (type) {
          case 'visa':
            tarjetaVisa.style.display = 'inline';
            tarjetaMastercard.style.display = 'none';
            tarjetaAmex.style.display = 'none';
            break;
          case 'mastercard':
            tarjetaVisa.style.display = 'none';
            tarjetaMastercard.style.display = 'inline';
            tarjetaAmex.style.display = 'none';
            break;
          case 'amex':
            tarjetaVisa.style.display = 'none';
            tarjetaMastercard.style.display = 'none';
            tarjetaAmex.style.display = 'inline';
            break;
          default:
            tarjetaVisa.style.display = 'none';
            tarjetaMastercard.style.display = 'none';
            tarjetaAmex.style.display = 'none';
            break;
        }
    }
});

const showCart= document.getElementById('show-cart');

const agregarProdcutos=()=>{
    cart.forEach(product=>{
        const li = document.createElement('li');
        li.classList.add('producto');
        li.innerHTML=`
        <img class="producto_img--cart" src="${product.imagen}"></img>
        <h3 class="producto_nombre">${product.nombre}</h3>
        <p class="producto_precio">${product.precio}</p>
        <p class="producto_cantidad">Cantidad: ${product.cantidad}</p
        `
        showCart.appendChild(li);
    })
}

agregarProdcutos();

// FORMULARIO DE COMPRA

// valida mail
function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}


// boton de compra


const form = document.getElementById('data-cliente');
const dataComprar = document.getElementById('data-comprar');



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const dni = document.getElementById('dni').value;
    const email = document.getElementById('email').value;
    const credit = document.getElementById('num-cart').value;
    // Validar los campos
    if (nombre.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese su nombre',
        })
        return;
    }
    if (surname.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese su apellido',
        })
        return;
    }
    if (dni.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese su Dni',
        })
        return;
    }
    if (!isValidEmail(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un email valido',
        })
        return;
    }
    if (credit.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese una tarjeta',
        })
        return;
    }

    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(prod =>{
        stock.then(stock=>{
            const productEncontrado= stock.find(stock=> stock.modelo === prod.nombre.split(" ")[1]);
            productEncontrado.stock -= prod.cantidad;
            console.log(stock);
        });
    })
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    Swal.fire({
        icon: 'success',
        title: 'Compra exitosa!',
        text: 'Muchas gracias por comprar en Doña Pepa',
    })
    
    // Redireccionar al usuario a otra página después de un breve retraso
    setTimeout(() => {
        form.submit();
        window.location.href = "../pages/shop.html";
    }, 2000);
    
    
})
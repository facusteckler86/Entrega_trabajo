const producto_container = document.getElementById('producto_container');

// creo los productos, de acuerdo al stock que hay

stock.then((stock) => {
    stock.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML=`
        <img class="producto_img" src="${item.imagen}"></img>
        <h3 class="producto_nombre">${item.marca} ${item.modelo}</h3>
        <p class="producto_precio">$${item.precio}</p>
        <button type="button" class="producto_btn">Añadir al carrito</button>
    `
        producto_container.appendChild(div);
    });
})

producto_container.addEventListener('click',item =>{
    if(item.target.classList.contains("producto_btn")){
        
        const producto = item.target.parentElement;
        const infoProduct = {
            cantidad:1,
            imagen: producto.querySelector('.producto_img').src,
            nombre: producto.querySelector('.producto_nombre').textContent,
            precio: producto.querySelector('.producto_precio').textContent,
        }
        const existe = cart.some(producto=> producto.nombre === infoProduct.nombre);
        if(existe){
            const index = cart.findIndex(producto=> producto.nombre === infoProduct.nombre);
            cart[index].cantidad++;
            localStorage.setItem('cart',JSON.stringify(cart));
        }else{
            cart=[...cart,infoProduct];
            localStorage.setItem('cart',JSON.stringify(cart));
        }
        verificar_stock();
        
        //agregamos el producto al carrito
        agregarHtml();
        contar_productos();
        calcular_total();
    }
})
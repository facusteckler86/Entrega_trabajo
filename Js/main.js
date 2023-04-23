// modelo de carrito de compra para panaderia

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

const cartInfo = document.querySelector(".cart-product")
const rowProduct = document.querySelector(".row-product")

// listado de productos

const productsList = document.querySelector(`.container-items`)

let allProducts = [
  {id: 1, nombre: "pan de campo",precio: 750},
  {id: 2, nombre: "medialunas",precio: 1500},
  {id: 3, nombre: "sanguches",precio: 350},
  {id: 4, nombre: "rosquitas",precio: 500},
  {id: 5, nombre: "torta de chocolate",precio: 5000}

]

productsList.addEventListener("click", e => {

  
  if (e.target.classList.contains("btn-add-cart")){
      const product = e.target.parentElement;
      const infoProduct = {
        quantity: 1,
        title: product.querySelector("h2").textContent,
        price: product.querySelector("p").textContent,
      }
      console.log(infoProduct);
      const salida = allProducts.some(product => product.title === infoProduct.title)

      if (salida) {
        
        const product = allProducts.map(product =>{
          if (product.title === infoProduct.title) {
            product.quantity++;
            return product
            
          } else{ 
            return product}
           })
      }
      allProducts = [...allProducts, infoProduct]
      showHTML();
    }
    console.log(allProducts);    

})


const showHTML = () =>{
  
  allProducts.forEach(product =>{
    const containerProduct = document.createElement("div")
    containerProduct.classList.add("cart-product")

    containerProduct.innerHTML = `
      <span class="cantidad-producto-carrito">${product.quantity}</span>
      <p class="titulo-producto-carrito">${product.title}</p>
      <span class="precio-producto-carrito">${product.price}</span>
    </div>
    
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="icon-close"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M6 18L18 6M6 6l12 12"
/>
</svg>
    
    `
    rowProduct.append(containerProduct)

  })


}

  let boton = document.getElementById("boton");


// Botones para agregar productos al carrito, y tambien para consultar si se eliminan o no.
  
  boton.addEventListener("click", () => {
      Swal.fire({
        title: "Agregue el producto",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Look up",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: result.value,
          });
        }
      });
    });

    boton.addEventListener("click",() => {
      Swal.fire({
        title: "Esta seguro de eliminar el producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si,estoy segur@",
        cancelButtonText: "No, me arrepenti",
      }).then((result)=> {
        if(result.isConfirmed){
          Swal.fire({
            title:"Borrado!!",
            icon: "success",
            text: "El producto ha sido borrado",
          });
        }

      });
    });

    
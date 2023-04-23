const body = document.querySelector('body');
const traerStock = async () =>{
    try{
        const response = await fetch("../data.json");
        const stock = await response.json();
        return stock;
    }catch(error){
        console.log(error);
    }   
}

stock=traerStock();

//verifica la cantidad de productos.

const verificar_stock =()=>{
    stock.then((stock)=>{
        for (let i = 0; i < cart.length; i++) {
            const prod_stock= stock.find(producto=>producto.modelo===cart[i].nombre.split(" ")[1]);
            
            if(prod_stock.stock<cart[i].cantidad){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `No quedan mas ${cart[i].nombre}, Stock insuficiente!`,
                })
                
                cart[i].cantidad--;
                localStorage.setItem('cart',JSON.stringify(cart));
                agregarHtml();
                contar_productos();
                calcular_total();
            }
        }
    });
}
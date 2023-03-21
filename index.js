// modelo de carrito de compra para panaderia

let usuario = prompt("Hola, Bienvenido, indique su usuario");

let formulario = document.getElementById("Formulario");
e.preventDefault();

formulario.addEventListener("submit", (e) => {

        let inputs = e.target.children;
        let nombre = inputs[0].value;
        let domicilio = inputs[1].value;
        let telefono = inputs[2];

        
        let objeto = {
            nombre,
            domicilio,
            telefono,
        };

        
        let usuarioStorage = localStorage.getItem("usuario");
        let usuario;

        if (usuario) {
            usuario = JSON.parse(usuarioStorage);
            
        } else{
            usuario [];
        }

        usuario.push(objeto);
        localStorage.setItem("usuario", JSON.stringify(usuario));
        
        //constructor de productos.

const productos=[
    
  {id: 1, nombre: "pan de campo",precio: 750},
  {id: 2, nombre: "medialunas",precio: 1500},
  {id: 3, nombre: "sanguches",precio: 350},
  {id: 4, nombre: "rosquitas",precio: 500},
      
  ];
  
  boton.addEventListener("click", () => {
      Swal.fire({
        title: "Agregue el producto",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Look up",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value}`,
          });
        }
      });
    });



    });    
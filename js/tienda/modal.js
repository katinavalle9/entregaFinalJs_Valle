const ballet = document.getElementById("ballet");
const cuerpo = document.getElementById("cuerpo");
const limpiarCarrito = document.getElementById("limpiarCarrito");
limpiarCarrito.addEventListener("click", () => {
  localStorage.clear();
  carrito();
});

ballet.addEventListener("show.mdb.modal", () => {
  carrito();
});

ballet.addEventListener("shown.mdb.modal", () => {
  //document.querySelector(".modal-backdrop").classList.add('d-none');
});

function carrito() {
  let productosBallet = localStorage.getItem("productosBallet");
  if (productosBallet) {
    let cuerpoModal =
      '<div class="table-responsive"><table class="table align-middle mb-0 bg-white text-center"><thead class="bg-light"><tr><th>Producto</th><th>Precio Unitario</th><th>Cantidad</th><th>Total</th><th>Eliminar</th></thead><tbody>';
    let totalFinal = 0;
    let productosElegidos = JSON.parse(productosBallet);
    let moneda;
    productosElegidos.forEach((productoElegido) => {
      let producto = productos.find(
        (producto) => producto.id === productoElegido.id
      );
      moneda = monedas.find((moneda) => moneda.id === producto.idMoneda);
      let total = productoElegido.cantidad * producto.precio;
      totalFinal += total;
      // console.log(total)
      // console.log(producto);
      cuerpoModal +=
        '<tr><td><div class="d-flex align-items-center"><img src="' +
        producto.imagen +
        '" alt="' +
        producto.nombre +
        '" style="width: 45px; height: 45px" class="rounded-circle"/>' +
        '<div class="ms-3 w-75"><p class="fw-bold mb-1">' +
        producto.nombre +
        '</p></div></div></td><td><p class="fw-normal mb-1">' +
        moneda.simbolo +
        producto.precio.toFixed(2) +
        " " +
        moneda.nombre +
        '</p></td><th><p class="fw-normal mb-1">' +
        productoElegido.cantidad +
        '</p></th><td><p class="fw-normal mb-1">' +
        moneda.simbolo +
        total.toFixed(2) +
        " " +
        moneda.nombre +
        '</p></td><td><button class="btn btn-danger btn-eliminar" data-idproducto="' +
        producto.id +
        '"><i class="fa-regular fa-trash-can"></i></button></td></tr>';
    });
    cuerpoModal +=
      '<tr><th class="text-center" colspan="3">Total</th><td>' +
      moneda.simbolo +
      totalFinal.toFixed(2) +
      " " +
      moneda.nombre +
      "</td><td></td></tr></tbody></table></div>";
    cuerpo.innerHTML = cuerpoModal;
    eliminar();
  } else {
    cuerpo.innerHTML =
      '<p class="text-center">Todavía no tienes productos en tu carrito <i class="fa-regular fa-face-frown-open text-warning"></i></p>';
  }
}

function eliminar() {
  const botonesEliminar = document.querySelectorAll(".btn-eliminar");
  //console.log(botonesEliminar);
  botonesEliminar.forEach((botonEliminar) => {
    botonEliminar.addEventListener("click", () => {
      const id = botonEliminar.dataset.idproducto;
      console.log(id);
      let productosString= localStorage.getItem("productosBallet");
      let productosElegidos = JSON.parse(productosString);
        if(productosElegidos.length ==1){
            localStorage.clear();
        }else{
            productosElegidos = productosElegidos.filter((x)=>x.id !==parseInt(id))
            localStorage.setItem("productosBallet", JSON.stringify(productosElegidos));
        }
      console.log(productosElegidos);
      carrito();
    });
  });
}

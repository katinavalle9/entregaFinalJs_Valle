import { productos } from "./producto.js";
import { monedas } from "./moneda.js";
import keys from "./env.js";
const ballet = document.getElementById("ballet");
const cuerpo = document.getElementById("cuerpo");
const limpiarCarrito = document.getElementById("limpiarCarrito");
const procederPago = document.getElementById("procederPago");
const myModalEl = new mdb.Modal(ballet);
limpiarCarrito.addEventListener("click", () => {
  localStorage.clear();
  carrito();
});

ballet.addEventListener("show.mdb.modal", () => {
  carrito();
});

function carrito() {
  let productosBallet = localStorage.getItem("productosBallet");
  let protocol = window.location.protocol == "http:";
  let index =
    window.location.href.includes("index.html") ||
    (protocol && window.location.pathname.split("/").length == 2) ||
    (!protocol && window.location.pathname.split("/").length == 3);
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
      cuerpoModal +=
        '<tr><td><div class="d-flex align-items-center"><img src="' +
        (index ? producto.imagen.replace("../", "") : producto.imagen) +
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
    //aqui se agrega el boton
    limpiarCarrito.style.display = "block";
    procederPago.style.display = "block";

    eliminar();
  } else {
    //asigna valor boolean y le incluye tienda a la url y se verifica si esta en la tienda o no
    let tienda = window.location.href.includes("tienda.html");
    let href = index ? "pages/tienda.html" : !tienda ? "tienda.html" : "";
    let enlace = !tienda
      ? '<br><div class="text-center"> <a href="' +
        href +
        '" class="link">Ir a la tienda <i class="fa-solid fa-cart-shopping text-dark"></i></a></div>'
      : "";
    cuerpo.innerHTML =
      '<p class="text-center">Todavía no tienes productos en tu carrito <i class="fa-regular fa-face-frown-open text-warning"></i></p>' +
      enlace;
    limpiarCarrito.style.display = "none";
    procederPago.style.display = "none";
  }
}

function eliminar() {
  const botonesEliminar = document.querySelectorAll(".btn-eliminar");
  //console.log(botonesEliminar);
  botonesEliminar.forEach((botonEliminar) => {
    botonEliminar.addEventListener("click", () => {
      const id = botonEliminar.dataset.idproducto;
      console.log(id);
      let productosString = localStorage.getItem("productosBallet");
      let productosElegidos = JSON.parse(productosString);
      if (productosElegidos.length == 1) {
        localStorage.clear();
      } else {
        productosElegidos = productosElegidos.filter(
          (x) => x.id !== parseInt(id)
        );
        localStorage.setItem(
          "productosBallet",
          JSON.stringify(productosElegidos)
        );
      }
      console.log(productosElegidos);
      carrito();
    });
  });
}

procederPago.addEventListener("click", () => {
  let productosCarritoString = localStorage.getItem("productosBallet");
  let productosCarrito = JSON.parse(productosCarritoString);
  //se hace esto porque en stripe se le pasa el price y quantity y lo adapto al mio
  const stripeData = productosCarrito.map((objeto) => {
    return { price: objeto.idStripe, quantity: objeto.cantidad };
  });

  Stripe(keys.public)
    .redirectToCheckout({
      lineItems: stripeData,
      mode: "payment",
      successUrl:
        window.location.href.replace("?success=true", "") + "?success=true",
      cancelUrl:
        window.location.href.replace("?success=false", "") + "?success=false",
    })
    .then((res) => {
      if (res.error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error inesperado. Intente de nuevo por favor",
        });
        myModalEl.hide();
      }
    })
    .catch((err) => {
      let message =
        "Ocurrió en error inesperado. Le recomendamos limpiar el carrito y agregar menos productos para continuar";
      Swal.fire({
        icon: "error",
        title: "Aviso...",
        text: message,
      });
      myModalEl.hide();
    });
});

//Este evento es para comprobar el tipo de success que te devuelve
document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(window.location.href);
  const success = url.searchParams.get("success");
  if (success) {
    if (success === "true") {
      Swal.fire({
        icon: "success",
        title: "Su pago procedió, gracias por su compra",
      });
      localStorage.clear();
      carrito();
    } else {
      Swal.fire({
        icon: "error",
        title: "Aviso...",
        text: "Su pago no procedió. Por favor intente de nuevo",
      });
    }
  }
});

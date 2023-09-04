//////////////////////////////////////////ES TODA LA FUNCIONALIDAD////////////////////////////////////////////////////////////
import {productos} from "./producto.js";
import {categorias} from "./categoria.js";
import {monedas} from "./moneda.js";
//console.log(productos);
let loadingContainer = document.getElementById("loading-container");
let container = document.getElementById("products-container");
let searchInput = document.getElementById("search-input");
const btnAgregar = document.getElementById("btn-agregar");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
  document.getElementById("notificacion")
);
const toastTitle = document.getElementById("toast-title");
const cuerpoToast = document.getElementById("toast-body");
//cuando se ha cargado por completo la pagina se hace el evento y llama a la funcion despues de 2 seg. y si se le pasa a true es que es primera vez
window.addEventListener("load", (e) => {
  mainRender(2000, true);
});

//si el valor del campo esta vacio se muestra el contenedor de carga sino esta vacio se filtran los productos segun el valor del input y se llama renderProdcutos
//con los productos productos filtrados
searchInput.addEventListener("input", (e) => {
  // console.log(searchInput.value);
  container.innerHTML = "";
  if (searchInput.value === "") {
    // console.log("input vacio")
    loadingContainer.classList.remove("d-none");
    mainRender(500);
  } else {
    //el includes funciona como un booleano y en vez de comparar con un === se le pone el includes con el valor que va a ingresar el usuario para filtrar los datos
    let tempProductos = productos.filter((p) =>
      p.nombre.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    renderProductos(tempProductos);
    //se tiene que poner porque ya se estra filtrando y se ponen los eventos y no puede ponerse afuera de la condicion porque mainRander()ya tiene la funcion de rendeProductos() y ya tiene la funcion de botonesCantidad() y sse estaria duplicando una funcion
    botonesCantidad();
  }
});

//es una funcion que renderiza los productos por categoria por un tiempo determinado, si primeraVez es true se habilita el campo de busqueda
function mainRender(time, esPrimeraVez = false) {
  setTimeout(() => {
    renderProductosPorCategoria();
    if (esPrimeraVez) {
      searchInput.disabled = false;
    }
  }, time);
}

//Renderiza los productos por categoria y oculta el contenido de carga filtra por categoria,filtra los prodcutos que pertenecen a esa categoria y genera un titulo
//html para la categoria,luego llama a renderProdcutos con los prodcutos filtrados
function renderProductosPorCategoria() {
  loadingContainer.classList.add("d-none");
  categorias.forEach((categoria) => {
    //console.log(categoria);
    let tempProductos = productos.filter((p) => p.idCategoria === categoria.id);
    let title =
      '<h2 class="text-center my-3 my-lg-5 p-primera">' +
      categoria.nombre +
      "</h2>";
    container.insertAdjacentHTML("beforeend", title);
    renderProductos(tempProductos);
  });
  botonesCantidad();
}

function botonesCantidad() {
  const botonesMas = document.querySelectorAll(".btn-mas");
  const botonesMenos = document.querySelectorAll(".btn-menos");
  const cantidadInputs = document.querySelectorAll(".cantidad-input");
  const botonesAgregarCarrito = document.querySelectorAll(
    ".btn-agregar-carrito"
  );

  //para el boton de mas
  botonesMas.forEach((botonMas) => {
    botonMas.addEventListener("click", (e) => {
      const id = botonMas.dataset.idproducto;
      const cantidadInput = document.getElementById(`cantidad-input-${id}`);
      cantidadInput.value =
        cantidadInput.value === "" ? "0" : cantidadInput.value;
      cantidadInput.value = parseInt(cantidadInput.value) + 1;
    });
  });
  //para el boton de menos
  botonesMenos.forEach((botonMenos) => {
    botonMenos.addEventListener("click", (e) => {
      const id = botonMenos.dataset.idproducto;
      const cantidadInput = document.getElementById(`cantidad-input-${id}`);
      if (parseInt(cantidadInput.value) > 1) {
        cantidadInput.value = parseInt(cantidadInput.value) - 1;
      } else {
        cantidadInput.value = "1";
      }
    });
  });
  cantidadInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      // Obtener el valor actual del input
      const inputValue = e.target.value;

      // Reemplazar cualquier caracter no numérico con una cadena vacía
      const sanitizedValue = inputValue.replace(/\D/g, "");
      // console.log(sanitizedValue);
      // Asegurarse de que el valor no esté vacío y sea mayor a 0
      if (sanitizedValue === "" || sanitizedValue < 1) {
        e.target.value = ""; // Establecer el valor mínimo si es menor a 1 o está vacío
      } else {
        e.target.value = sanitizedValue;
      }
    });
  });
  botonesAgregarCarrito.forEach((boton) => {
    boton.addEventListener("click", () => {
      let productoId = parseInt(boton.dataset.idproducto);
      const cantidadInput = parseInt(
        document.getElementById(`cantidad-input-${productoId}`).value
      );
      let productosElegidos = [];
      let coincidencias;
      let productosBallet = localStorage.getItem("productosBallet");
      let producto = {
        id: productoId,
        cantidad: cantidadInput,
      };
      if (!isNaN(cantidadInput)) {
        if (productosBallet) {
          productosElegidos = JSON.parse(productosBallet);
          coincidencias = productosElegidos.find((pe) => pe.id === producto.id);
          if (coincidencias !== undefined) {
            coincidencias.cantidad += producto.cantidad;
            console.log(coincidencias);
          } else {
            productosElegidos.push(producto);
            console.log(productosElegidos);
          }
        } else {
          productosElegidos.push(producto);
          console.log(productosElegidos);
        }
        localStorage.setItem(
          "productosBallet",
          JSON.stringify(productosElegidos)
        );
        toastTitle.innerHTML =
          'Producto agregado <i class="fa-solid fa-circle-check ms-3 text-success"></i>';
        cuerpoToast.innerHTML = "Su producto ha sido agregado con éxito al carrito de compras ";
        toastBootstrap.show();
      } else {
        toastTitle.innerHTML =
          'Advertencia <i class="fa-solid fa-triangle-exclamation ms-3 text-warning"></i>';
        cuerpoToast.innerHTML = "Cantidad inválida";
        toastBootstrap.show();
      }
    });
  });
}

//creo los botones
function createCantidadContainer(id) {
  let cantidadInput = `<input type="tel" id="cantidad-input-${id}" class="cantidad-input form-control form-control-sm mx-2" value="1" min="1">`;
  let botonMas = `<button class="btn-mas btn btn-sm btn-dark color-light btn-rounded" data-idProducto="${id}" ><i class="fas fa-plus"></i></button>`;
  let botonMenos = `<button class="btn-menos btn btn-sm btn-dark color-light btn-rounded" data-idProducto="${id}" ><i class="fas fa-minus"></i></button>`;
  let agregarCarrito = `<button class="btn-agregar-carrito btn btn-primary mt-2" data-idProducto="${id}" >Agregar al Carrito</button>`;
  return (
    `<div class="cantidad-container d-flex">` +
    botonMenos +
    cantidadInput +
    botonMas +
    "</div>" +
    "<div>" +
    agregarCarrito +
    "</div>"
  );
}

//toma una lista de productos y los renderiza en una estructura HTML, por cada producto se obtiene la moneda correspondiente,la imagen,su nombre y precio con el simbolo
//y se agrega al contenedor "container"
function renderProductos(productos) {
  //esto es para que se pongan todos los prodcutos de nuevo con sus propiedades
  let row = '<div class="row mb-3">';
  productos.forEach((producto) => {
    let tempMoneda = monedas.find((m) => m.id === producto.idMoneda);
    // console.log(tempMoneda);
    // console.log(producto.id);
    let cantidadContainer = createCantidadContainer(producto.id);
    let item =
      '<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center flex-column align-items-center mb-5"><div class="bg-image hover-zoom"><img class="h-250" src="' +
      producto.imagen +
      '" alt="' +
      producto.nombre +
      '"></div><p>' +
      producto.nombre +
      "</p><p>" +
      tempMoneda.simbolo +
      producto.precio.toFixed(2) +
      " " +
      tempMoneda.nombre +
      "</p>" +
      cantidadContainer +
      "</div>";
    row += item;
  });
  row += "</div>";
  container.insertAdjacentHTML("beforeend", row);
}

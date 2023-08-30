//////////////////////////////////////////ES TODA LA FUNCIONALIDAD////////////////////////////////////////////////////////////

//console.log(productos);
let loadingContainer = document.getElementById("loading-container");
let container = document.getElementById("products-container");
let searchInput = document.getElementById("search-input");
const btnAgregar = document.getElementById("btn-agregar");

//cuando se ha cargado por completo la pagina se hace el evento y llama a la funcion despues de 2 seg. y si pasa a true es que es primera vez
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
  //para el boton de mas
  botonesMas.forEach((botonMas) => {
    botonMas.addEventListener("click", (e) => {
      const cantidadInput =
        e.target.parentNode.querySelector(".cantidad-input");
      cantidadInput.value = parseInt(cantidadInput.value) + 1;
    });
    const cantidadInputs = document.querySelectorAll(".cantidad-input");

    cantidadInputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        const inputValue = parseInt(e.target.value);

        if (isNaN(inputValue) || inputValue < 1) {
          e.target.value = ""; // Establecer el valor mínimo si no es válido
        }
      });
    });
  });

  //para el boton de menos
  botonesMenos.forEach((botonMenos) => {
    botonMenos.addEventListener("click", (e) => {
      const cantidadInput =
        e.target.parentNode.querySelector(".cantidad-input");
      if (parseInt(cantidadInput.value) > 1) {
        cantidadInput.value = parseInt(cantidadInput.value) - 1;
      }
    });
  });
}

function createCantidadContainer() {
  let cantidadInput =
    '<input type="tel" class="cantidad-input" value="1" min="1">';
  let botonMas = '<button class="btn-mas btn btn-dark color-light">+</button>';
  let botonMenos =
    '<button class="btn-menos btn btn-dark color-light">-</button>';
  return (
    '<div class="cantidad-container">' +
    botonMenos +
    cantidadInput +
    botonMas +
    "</div>"
  );
}

//toma una lista de productos y los renderiza en una estructura HTML, por cada producto se obtiene la moneda correspondiente,la imagen,su nombre y precio con el simbolo
//y se agrega al contenedor "container"
function renderProductos(productos) {
  //esto es para que se pongan todos los prodcutos de nuevo con sus propiedades
  let row = '<div class="row">';
  productos.forEach((producto) => {
    let tempMoneda = monedas.filter((m) => m.id === producto.idMoneda)[0];
    // console.log(tempMoneda);
    let cantidadContainer = createCantidadContainer();
    let item =
      '<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center flex-column align-items-center"><div class="bg-image hover-zoom"><img class="h-250" src="' +
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

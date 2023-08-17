//////////////////////////////////////////ES TODA LA FUNCIONALIDAD////////////////////////////////////////////////////////////
//console.log(productos);
let loadingContainer = document.getElementById("loading-container");
let container = document.getElementById("products-container");
let searchInput = document.getElementById("search-input");

window.addEventListener("load", (e) => {
  mainRender(2000, true);
});

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
  }
});

function mainRender(time, esPrimeraVez = false) {
  setTimeout(() => {
    renderProductosPorCategoria();
    if (esPrimeraVez) {
      searchInput.disabled = false;
    }
  }, time);
}

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
}

function renderProductos(productos) {
  //esto es para que se pongan todos los prodcutos de nuevo con sus propiedades
  let row = '<div class="row">';
  productos.forEach((producto) => {
    let tempMoneda = monedas.filter((m) => m.id === producto.idMoneda)[0];
    // console.log(tempMoneda);
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
      "</p></div>";
    row += item;
  });
  row += "</div>";
  container.insertAdjacentHTML("beforeend", row);
}

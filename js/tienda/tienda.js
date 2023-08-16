class Producto {
  constructor(id, nombre, imagen, precio, idMoneda, idCategoria) {
    (this.id = id),
      (this.nombre = nombre),
      (this.imagen = imagen),
      (this.precio = precio),
      (this.idMoneda = idMoneda),
      (this.idCategoria = idCategoria);
  }
}

class Categoria {
  constructor(id, nombre) {
    (this.id = id), (this.nombre = nombre);
  }
}

class Moneda {
  constructor(id, nombre, simbolo) {
    (this.id = id), (this.nombre = nombre), (this.simbolo = simbolo);
  }
}

let categorias = [
  new Categoria((id = 1), (nombre = "PUNTAS & MEDIAS PUNTAS")),
  new Categoria((id = 2), (nombre = "FALDAS")),
  new Categoria((id = 3), (nombre = "LEOTARDOS")),
];

let monedas = [new Moneda((id = 1), (nombre = "MXN"), (simbolo = "$"))];

let productos = [
  new Producto(
    (id = 1),
    (nombre = "Puntas Bloch"),
    (imagen = "../images/bloch-1.webp"),
    (precio = 1890.0),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Puntas Bloch Europea "),
    (imagen = "../images/bloch-europea.webp"),
    (precio = 2150.0),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Medias Puntas Cameo"),
    (imagen = "../images/cameo-media.webp"),
    (precio = 589.5),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Medias Puntas Capezio "),
    (imagen = "../images/capezio-media.webp"),
    (precio = 961.0),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Puntas Capulet"),
    (imagen = "../images/capulet-punta.webp"),
    (precio = 892.9),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Puntas Chacott"),
    (imagen = "../images/chacott-media.webp"),
    (precio = 826.9),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Cruzada Negro"),
    (imagen = "../images/falda-basica.webp"),
    (precio = 399.0),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Negra Gasa"),
    (imagen = "../images/falda-cruzada.webp"),
    (precio = 559.0),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Gasa Morada"),
    (imagen = "../images/falda-gasa-morada.webp"),
    (precio = 193.0),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Gasa Rosada"),
    (imagen = "../images/falda-gasa.webp"),
    (precio = 135.5),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Larga Gasa Floreada"),
    (imagen = "../images/falda-larga.webp"),
    (precio = 376.0),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo Negro"),
    (imagen = "../images/leotardo-cuello.webp"),
    (precio = 471.9),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo Descubierta Espalda"),
    (imagen = "../images/leotardo-descubierta.webp"),
    (precio = 489.9),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo C/Mangas"),
    (imagen = "../images/leotardo-mangas.webp"),
    (precio = 471.0),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo Manga Corta"),
    (imagen = "../images/leotardo-media-manga.webp"),
    (precio = 469.0),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo Tirantes"),
    (imagen = "../images/leotardo-tirantes.webp"),
    (precio = 559.0),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
];
//console.log(productos);

let loadingContainer = document.getElementById("loading-container");
let container = document.getElementById("products-container");
setTimeout(() => {
  loadingContainer.classList.add("d-none");
  renderProductosPorCategoria();
}, 2000);

//PARA FILTRAR LOS PRODUCTOS AUN NO ESTA AVANZADO
let searchInput = document.getElementById("search-input");
let productsContainer = document.getElementById("products-container");
function renderProductos(productos) {
  // Aquí puedes usar tu código original para mostrar los productos
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

searchInput.addEventListener("input", (e) => {
  // console.log(searchInput.value);
  container.innerHTML = "";
  if (searchInput.value === "") {
    // console.log("input vacio")
    renderProductosPorCategoria();
  } else {
    let tempProductos = productos.filter((p) =>
      p.nombre.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    //el includes funciona como un booleano y en vez de comparar con un === se le pone el includes con el valor que va a ingresar el usuario
    renderProductos(tempProductos);
  }
});

function renderProductosPorCategoria() {
  categorias.forEach((categoria) => {
    //console.log(categoria);
    let tempProductos = productos.filter((p) => p.idCategoria === categoria.id);
    let title =
      '<h2 class="text-center my-3 my-lg-5 p-primera">' +
      categoria.nombre +
      "</h2>";
    container.insertAdjacentHTML("beforeend", title);
    let row = '<div class="row">';
    tempProductos.forEach((producto) => {
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
  });
}

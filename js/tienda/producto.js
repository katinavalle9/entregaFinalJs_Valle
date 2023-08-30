class Producto {
  constructor(
    id,
    nombre,
    imagen,
    precio,
    tienePromocion,
    porcentajePromocion,
    cantidadPromocion,
    idMoneda,
    idCategoria
  ) {
    (this.id = id),
      (this.nombre = nombre),
      (this.imagen = imagen),
      (this.precio = precio),
      (this.tienePromocion = tienePromocion),
      (this.porcentajePromocion = porcentajePromocion),
      (this.cantidadPromocion = cantidadPromocion),
      (this.idMoneda = idMoneda),
      (this.idCategoria = idCategoria);
  }
}

let productos = [
  new Producto(
    (id = 1),
    (nombre = "Puntas Bloch"),
    (imagen = "../images/bloch-1.webp"),
    (precio = 1890.0),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Puntas Bloch Europea "),
    (imagen = "../images/bloch-europea.webp"),
    (precio = 2150.0),
    (tienePromocion = true),
    (porcentajePromocion = 25),
    (cantidadPromocion = 2),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Medias Puntas Cameo"),
    (imagen = "../images/cameo-media.webp"),
    (precio = 589.5),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
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
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Puntas Chacott"),
    (imagen = "../images/chacott-media.webp"),
    (precio = 826.9),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 1)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Cruzada Negro"),
    (imagen = "../images/falda-basica.webp"),
    (precio = 399.0),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Negra Gasa"),
    (imagen = "../images/falda-cruzada.webp"),
    (precio = 559.0),
    (tienePromocion = true),
    (porcentajePromocion = 10),
    (cantidadPromocion = 3),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Gasa Morada"),
    (imagen = "../images/falda-gasa-morada.webp"),
    (precio = 193.0),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Gasa Rosada"),
    (imagen = "../images/falda-gasa.webp"),
    (precio = 135.5),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Falda Larga Gasa Floreada"),
    (imagen = "../images/falda-larga.webp"),
    (precio = 376.0),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 2)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo Negro"),
    (imagen = "../images/leotardo-cuello.webp"),
    (precio = 471.9),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo Descubierta Espalda"),
    (imagen = "../images/leotardo-descubierta.webp"),
    (precio = 489.9),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo C/Mangas"),
    (imagen = "../images/leotardo-mangas.webp"),
    (precio = 471.0),
    (tienePromocion = true),
    (porcentajePromocion = 30),
    (cantidadPromocion = 4),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo Manga Corta"),
    (imagen = "../images/leotardo-media-manga.webp"),
    (precio = 469.0),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
  new Producto(
    (id = 1),
    (nombre = "Leotardo Tirantes"),
    (imagen = "../images/leotardo-tirantes.webp"),
    (precio = 559.0),
    (tienePromocion = false),
    (porcentajePromocion = 0),
    (cantidadPromocion = 0),
    (idMoneda = 1),
    (idCategoria = 3)
  ),
];

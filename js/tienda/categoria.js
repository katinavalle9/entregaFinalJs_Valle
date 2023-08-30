class Categoria {
  constructor(id, nombre, descripcion) {
    (this.id = id), (this.nombre = nombre), (this.descripcion = descripcion);
  }
}

let categorias = [
  new Categoria(
    (id = 1),
    (nombre = "PUNTAS & MEDIAS PUNTAS"),
    (descripcion = "zapatillas")
  ),
  new Categoria((id = 2), (nombre = "FALDAS"), (descripcion = "faldas")),
  new Categoria((id = 3), (nombre = "LEOTARDOS"), (descripcion = "leotardos")),
];

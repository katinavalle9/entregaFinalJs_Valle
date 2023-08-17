class Categoria {
  constructor(id, nombre) {
    (this.id = id), (this.nombre = nombre);
  }
}

let categorias = [
  new Categoria((id = 1), (nombre = "PUNTAS & MEDIAS PUNTAS")),
  new Categoria((id = 2), (nombre = "FALDAS")),
  new Categoria((id = 3), (nombre = "LEOTARDOS")),
];

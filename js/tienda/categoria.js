import datos from "../base.json" assert { type: "json" };

class Categoria {
  constructor(id, nombre, descripcion) {
    (this.id = id), (this.nombre = nombre), (this.descripcion = descripcion);
  }
}
export const categorias = datos.categorias.map(
  (categoria) =>
    new Categoria(categoria.id, categoria.nombre, categoria.descripcion)
);

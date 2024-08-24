// import datos from "../../datos/base.json" assert { type: "json" };

// class Categoria {
//   constructor(id, nombre, descripcion) {
//     (this.id = id), (this.nombre = nombre), (this.descripcion = descripcion);
//   }
// }
// export const categorias = datos.categorias.map(
//   (categoria) =>
//     new Categoria(categoria.id, categoria.nombre, categoria.descripcion)
// );

class Categoria {
  constructor(id, nombre, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

// Exporta `categorias` como un array vacío inicialmente
export let categorias = [];

// Aquí usas fetch para cargar el JSON
fetch("/datos/base.json")
  .then((response) => response.json())
  .then((datos) => {
    // Llena `categorias` con los datos cargados
    categorias = datos.categorias.map(
      (categoria) =>
        new Categoria(categoria.id, categoria.nombre, categoria.descripcion)
    );

    // Ahora puedes acceder a `categorias`
    //console.log(categorias); // Verifica que las categorías se han cargado correctamente
  })
  .catch((error) => {
    console.error("Error al cargar el JSON:", error);
  });

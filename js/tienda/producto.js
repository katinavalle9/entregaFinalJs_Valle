// import datos from "../../datos/base.json" assert { type: "json" };
// class Producto {
//   constructor(
//     id,
//     nombre,
//     imagen,
//     precio,
//     tienePromocion,
//     porcentajePromocion,
//     cantidadPromocion,
//     idMoneda,
//     idCategoria,
//     idStripe
//   ) {
//     (this.id = id),
//       (this.nombre = nombre),
//       (this.imagen = imagen),
//       (this.precio = precio),
//       (this.tienePromocion = tienePromocion),
//       (this.porcentajePromocion = porcentajePromocion),
//       (this.cantidadPromocion = cantidadPromocion),
//       (this.idMoneda = idMoneda),
//       (this.idCategoria = idCategoria),
//       (this.idStripe = idStripe);
//   }
// }
// export const productos = datos.productos.map(
//   (producto) =>
//     new Producto(
//       producto.id,
//       producto.nombre,
//       producto.imagen,
//       producto.precio,
//       producto.tienePromocion,
//       producto.porcentajePromocion,
//       producto.cantidadPromocion,
//       producto.idMoneda,
//       producto.idCategoria,
//       producto.idStripe
//     )
// );

// class Producto {
//   constructor(
//     id,
//     nombre,
//     imagen,
//     precio,
//     tienePromocion,
//     porcentajePromocion,
//     cantidadPromocion,
//     idMoneda,
//     idCategoria,
//     idStripe
//   ) {
//     this.id = id;
//     this.nombre = nombre;
//     this.imagen = imagen;
//     this.precio = precio;
//     this.tienePromocion = tienePromocion;
//     this.porcentajePromocion = porcentajePromocion;
//     this.cantidadPromocion = cantidadPromocion;
//     this.idMoneda = idMoneda;
//     this.idCategoria = idCategoria;
//     this.idStripe = idStripe;
//   }
// }

// // Aquí usas fetch para cargar el JSON
// fetch("../../datos/base.json")
//   .then((response) => response.json())
//   .then((datos) => {
//     const productos = datos.productos.map(
//       (producto) =>
//         new Producto(
//           producto.id,
//           producto.nombre,
//           producto.imagen,
//           producto.precio,
//           producto.tienePromocion,
//           producto.porcentajePromocion,
//           producto.cantidadPromocion,
//           producto.idMoneda,
//           producto.idCategoria,
//           producto.idStripe
//         )
//     );

//     // Ahora puedes acceder a `productos`, `categorias`, y `monedas`
//     const categorias = datos.categorias;
//     const monedas = datos.monedas;

//     // Lógica que depende de `productos`, `categorias`, o `monedas`
//     console.log(productos, categorias, monedas);
//     // Aquí podrías inicializar la UI o realizar otras operaciones
//   })
//   .catch((error) => {
//     console.error("Error al cargar el JSON:", error);
//   });

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
    idCategoria,
    idStripe
  ) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.tienePromocion = tienePromocion;
    this.porcentajePromocion = porcentajePromocion;
    this.cantidadPromocion = cantidadPromocion;
    this.idMoneda = idMoneda;
    this.idCategoria = idCategoria;
    this.idStripe = idStripe;
  }
}

// Exporta `productos` como un array vacío inicialmente
export let productos = [];

// Aquí usas fetch para cargar el JSON
fetch("/datos/base.json")
  .then((response) => response.json())
  .then((datos) => {
    // Llena `productos` con los datos cargados
    productos = datos.productos.map(
      (producto) =>
        new Producto(
          producto.id,
          producto.nombre,
          producto.imagen,
          producto.precio,
          producto.tienePromocion,
          producto.porcentajePromocion,
          producto.cantidadPromocion,
          producto.idMoneda,
          producto.idCategoria,
          producto.idStripe
        )
    );

    // Ahora puedes acceder a `productos`, `categorias`, y `monedas`
    const categorias = datos.categorias;
    const monedas = datos.monedas;

    // Lógica que depende de `productos`, `categorias`, o `monedas`
    //console.log(productos, categorias, monedas);
    // Aquí podrías inicializar la UI o realizar otras operaciones
  })
  .catch((error) => {
    console.error("Error al cargar el JSON:", error);
  });

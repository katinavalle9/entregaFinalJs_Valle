import datos from "../../datos/base.json" assert { type: "json" };
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
export const productos = datos.productos.map(
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
      producto.idCategoria
    )
);

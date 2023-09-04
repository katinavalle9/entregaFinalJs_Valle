import datos from "../../datos/base.json" assert { type: "json" };

class Moneda {
  constructor(id, nombre, simbolo) {
    (this.id = id), (this.nombre = nombre), (this.simbolo = simbolo);
  }
}

export const monedas = datos.monedas.map(
  (moneda) => new Moneda(moneda.id, moneda.nombre, moneda.simbolo)
);

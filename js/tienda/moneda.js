// import datos from "../../datos/base.json" assert { type: "json" };

// class Moneda {
//   constructor(id, nombre, simbolo) {
//     (this.id = id), (this.nombre = nombre), (this.simbolo = simbolo);
//   }
// }

// export const monedas = datos.monedas.map(
//   (moneda) => new Moneda(moneda.id, moneda.nombre, moneda.simbolo)
// );

// Definición de la clase Moneda
class Moneda {
  constructor(id, nombre, simbolo) {
    this.id = id;
    this.nombre = nombre;
    this.simbolo = simbolo;
  }
}

// Exportación inicial de 'monedas' como un array vacío
export let monedas = [];

// Carga del archivo JSON de manera asíncrona usando fetch
fetch("/datos/base.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    return response.json();
  })
  .then((datos) => {
    // Mapeo de los datos cargados a objetos de la clase Moneda
    monedas = datos.monedas.map(
      (moneda) => new Moneda(moneda.id, moneda.nombre, moneda.simbolo)
    );

    // Aquí puedes ejecutar cualquier código que dependa de 'monedas'
    // Ejemplo: initMonedas(); si tienes una función para inicializar la UI
    //console.log(monedas); // Solo para demostrar que las monedas se han cargado correctamente
  })
  .catch((error) => {
    console.error("Error al cargar el JSON:", error);
  });

// Ejemplo de función que podrías llamar después de que las monedas se carguen
// function initMonedas() {
//   // Aquí iría el código para manejar las monedas en la UI o en la lógica de la aplicación
// }

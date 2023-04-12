const utils = require("../utils");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  2️⃣ ***** EJERCICIO 2 ***** - filtrarPorEdad 2️⃣:
  
  🟢 El ZOO necesita que devuelvas los animales en la base de datos que tengan una edad menor o igual a la que te pasan por parametro.
  🟢 Si no hay coincidencia, necesitamos que devuelvas un mensaje de error que diga: "No hay animales igual o menores a la edad solicitada".

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los animales a través de *utils.animal*.
  2) Recibirás la edad por parámetro.
*/

const filtrarPorEdad = (edad) => {
  const animalesFiltrados = utils.animal.filter(
    (animal) => animal.edad <= edad
  );

  if (animalesFiltrados.length === 0) {
    throw new Error("No hay animales igual o menores a la edad solicitada");
  }

  return animalesFiltrados;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = filtrarPorEdad;

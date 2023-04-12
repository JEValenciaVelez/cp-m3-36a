const utils = require("../utils");
/*⚠️ No modificar nada arriba de esta línea ⚠️

  5️⃣ ***** EJERCICIO 5 ***** - ordenarPorEdad 5️⃣:
  
  🟢 Retornar un array de animales que esten ordenados por edad, de mayor a menor.
  📌 Si no hay animales, debes de retornar un error que diga: "No se encontraron animales"
  
  🟢 Investigar el parámetro "sort" puede tener dos valores.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
*/

const ordenarPorEdad = () => {
  const animales = utils.animal;

  if (animales.length === 0) {
    throw new Error("No se encontraron animales");
  }

  animales.sort((animalA, animalB) => {
    return animalB.edad - animalA.edad;
  });

  return animales;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = ordenarPorEdad;

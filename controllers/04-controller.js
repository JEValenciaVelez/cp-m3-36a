const utils = require("../utils");

/* ⚠️ No modificar nada arriba de esta línea ⚠️ */

/* 4️⃣ ** EJERCICIO 4 ** - deleteAnimal 4️⃣:

Busca un animal por ID. Elimínalo y responde con el array de animales teniendo en cuenta que no está más el que acabas de eliminar.
Si no existe un animal con ese ID, arrojá un error que diga: `No existe el animal con id: ${animalId}`.
*/

const deleteAnimal = (animalId) => {
  const animalEliminado = utils.animal.find((animal) => animal.id === animalId);
  if (!animalEliminado) {
    throw new Error(`No existe el animal con id: ${animalId}`);
  }
  const nuevosAnimales = utils.animal.filter(
    (animal) => animal.id !== animalId
  );
  utils.animal = nuevosAnimales;
  return nuevosAnimales;
};
module.exports = deleteAnimal;

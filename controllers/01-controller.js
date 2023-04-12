const utils = require("../utils");
// ⚠️ No modificar nada arriba de esta línea ⚠️

/// =========================================================================== ///
/// =========================== 🦒 HENRY-ZOO 🦒 ============================ ///
/// =========================================================================== ///

/*
  1️⃣ ***** EJERCICIO 1 ***** - addAnimalYEspecie 1️⃣:
  🟢 Agregar un animal a utils.animal.
  🟢 Agregar una especie a utils.especie.
  🟢 Si el animal ya existe en la base de datos, arrojar un Error('Este animal ya existe en la base de datos') 
  🟢 Si la especie ya existe en la base de datos, arrojar un Error('Esta especie ya existe en la base de datos')
  🟢 Retornar todos los animales si la operación fue exitosa.

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los animales mediante *utils.animal*.
  2) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  3) Recuerda verificar si el animal que intentas agregar, ya existe en utils.animal.
  4) Investiga acerca de Throw Error() para devolver errores.
  */


const addAnimalYEspecie = (animal, nuevaEspecie) => {
  const animalSearch = utils.animal.find((animalFinded) => {
    return animalFinded.name === animal.name;
  });
  const especieSearch = utils.especie.find((especieFinded) => {
    return especieFinded.especie === nuevaEspecie.especie;
  });

  if (animalSearch) throw "Este animal ya existe en la base de datos";

  if (especieSearch) throw "Esta especie ya existe en la base de datos";

  utils.animal.push(animal);
  utils.especie.push(nuevaEspecie);

  return utils.animal;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = addAnimalYEspecie;

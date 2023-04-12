const utils = require("../utils");
/*⚠️ No modificar nada arriba de esta línea ⚠️
  3️⃣ ** EJERCICIO 3 ** - updateAnimal 3️⃣:
 
  🟢 Debes buscar un animal recibido por parámetro dentro del array de utils.animal y actualizar las propiedades: peso 
  y altura. También agrégale una nueva propiedad llamada "tipoDeDieta".
  🟢 Si no encuentras el animal debes arrojar un error que diga: "No se encontro el animal solicitado".
  🟢 Si alguna de las propiedades del animal que recibimos es undefined, debe arrojar un error que diga: "Faltan 
  datos a completar".
    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  2) Recuerda agregar la nueva propiedad "tipoDeDieta", ésta no se encuentra en examples.json.
  */

const updateAnimal = (animal) => {
  const animalSearch = utils.animal.find((animalFinded) => {
    return animalFinded.id === animal.id;
  });

  if (!animalSearch) {
    throw "No se encontro el animal solicitado";
  }

  if (!animal.peso || !animal.altura || !animal.tipoDeDieta) {
    throw "Faltan datos a completar";
  }

  animalSearch.peso = animal.peso + " Kilos";
  animalSearch.altura = animal.altura + "cm";
  animalSearch.tipoDeDieta = animal.tipoDeDieta;

  return animalSearch;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = updateAnimal;

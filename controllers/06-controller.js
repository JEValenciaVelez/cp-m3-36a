const utils = require("../utils");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  6️⃣ ***** EJERCICIO 6 ***** - mostrarLaMediaDelPeso 6️⃣:

   🟢 Debes de sacar la edad media de todos los animales que se encuentran en el zoologico.
   🟢 Si la media no existe, arrojar un error que diga: "No tenemos valores".
      
   📢 PUNTOS A TENER EN CUENTA 📢
   1) Recuerden que la media se saca sumando el peso de cada animal, dividido la suma total de animales.
   2) el peso es un string, debemos de encontrar la manera de extraer solo el valor numerico y transformarlo en un numero.
*/

const mostrarLaMediaDelPeso = () => {
  if (utils.animal.length === 0) {
    throw new Error("No tenemos valores");
  }

  let sum = 0;
  let count = 0;

  for (let i = 0; i < utils.animal.length; i++) {
    const weight = parseInt(utils.animal[i].peso);
    if (!isNaN(weight)) {
      sum += weight;
      count++;
    }
  }

  if (count === 0) {
    throw new Error("No tenemos valores numéricos");
  }

  return Math.floor(sum / count);
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = mostrarLaMediaDelPeso;

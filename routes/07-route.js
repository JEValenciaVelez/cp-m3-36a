const router = require("express").Router();
const addAnimalYEspecie = require("../controllers/01-controller");

/* ⚠️ No modificar nada arriba de esta línea ⚠️

  7️⃣ ***** EJERCICIO 7 ***** - POST /animales 7️⃣:
  
  🟢 Integrar la función addAnimalYEspecie que desarrollaste previamente (Ejericio 1) para agregar un nuevo animal y especie en la 
  base de datos.
  📌 Responder un objeto con una propiedad "msg": <la base de datos con el animal agregado>.
  📌 Si hay un error, responder un objeto con una propiedad "err": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás los argumentos necesarios para ejecutar esa función addAnimalYEspecie mediante la propiedad "body" de *req*.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.post("/animal", (req, res) => {
  const { animal, especie } = req.body;

  try {
    res.status(201).send({ msg: addAnimalYEspecie(animal, especie) });
  } catch (error) {
    res.status(400).send({ err: error });
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;

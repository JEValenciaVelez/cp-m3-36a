/// ========================================================================== ///
/// ============================= HENRY-ZOO ============================= ///
/// ================================== TESTS ================================= ///

const addAnimalYEspecie = require('../controllers/01-controller');
const utils = require('../utils');
const expect = require('chai').expect;

describe('---------- `addAnimal` ----------', function () {
   const animal = utils.generateAnimal(2);
   const especies = utils.generateEspecie(4);
   beforeEach(function () {
      utils.reset();
   });

   it('Busca el animal en la base de datos. Si está, devuelve un error que diga: "Este animal ya existe en la base de datos"', function () {
      utils.animal.push(animal[0]);
      utils.animal.push(animal[1]);
      expect(() => addAnimalYEspecie(animal[0])).to.throw(
         'Este animal ya existe en la base de datos'
      );
      expect(utils.animal).to.have.length(2);
   });

   it('Busca la especie en la base de datos. Si ya existe, arroja un error que diga: "Esta especie ya existe en la base de datos"', function () {
      utils.especie.push(especies[0]);
      utils.especie.push(especies[1]);
      utils.especie.push(especies[2]);
      utils.especie.push(especies[3]);
      expect(() => addAnimalYEspecie(animal[0], especies[0])).to.throw(
         'Esta especie ya existe en la base de datos'
      );
      expect(utils.especie).to.have.length(4);
   });
   it('Debe agregar el animal a la base de datos (utils.animal)', function () {
      addAnimalYEspecie(animal, especies);
      expect(utils.animal[0]).to.eql(animal);
      expect(utils.animal[0]).to.have.length(2);
   });

   it('Debe agregar la especie a la base de datos (utils.especie)', () => {
      const especies2 = especies[0];
      utils.especie.push(especies2);
      addAnimalYEspecie(animal, especies);
      expect(utils.especie).to.eql([especies2, especies]);
   });

   it('Por último, debe devolver la base de datos de utils.animal)', function () {
      expect(addAnimalYEspecie(animal, especies)[0]).to.eql(animal);
      expect(utils.animal[0]).to.have.length(2);
   });
});

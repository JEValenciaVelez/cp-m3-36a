const supertest = require('supertest-as-promised')(require('../app'));
const utils = require('../utils');
const expect = require('chai').expect;

describe('POST /animales', function () {
   const animal = utils.generateAnimal(2);
   const especies = utils.generateEspecie(4);
   beforeEach(function () {
      utils.reset();
   });
   it('POST si el animal ya existe, responde con el error correspondiente y un status 400', function () {
      utils.animal.push(animal);
      utils.animal = utils.animal.flat();
      const animalExistente = utils.animal[0];
      return supertest
         .post('/animal')
         .send({ animal: animalExistente })
         .expect(400)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql({
               err: 'Este animal ya existe en la base de datos',
            });
         });
   });

   it('POST debe agregar el animal de forma correcta y retornar todos los animales junto a un status 201', function () {
      utils.animal.push(animal);
      utils.animal = utils.animal.flat();
      const animalAgregado = utils.generateAnimal(1);
      const agregradoOk = [...utils.animal, ...animalAgregado];
      return supertest
         .post('/animal')
         .send({ animal: animalAgregado[0], especie: especies })
         .expect(201)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql({
               msg: agregradoOk,
            });
         });
   });

   it('POST si ya existe la especie, responde con el error correspondiente y un status 400', function () {
      utils.especie.push(especies);
      utils.especie = utils.especie.flat();
      const especieExistente = utils.especie[0];
      return supertest
         .post('/animal')
         .send({ animal: animal, especie: especieExistente })
         .expect(400)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql({
               err: 'Esta especie ya existe en la base de datos',
            });
         });
   });

   it('POST agrega una nueva especie y responde con un status 201', () => {
      utils.especie = utils.especie.flat();
      return supertest
         .post('/animal')
         .send({ animal: animal, especie: especies[0] })
         .expect(201)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(utils.especie).to.have.length(1);
            expect(utils.especie).to.eql([especies[0]]);
         });
   });
});

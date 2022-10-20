// tests/unit/models/user.test.js

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../src/models/element.model');

const Element = UserModel(sequelize, dataTypes);
const element = new Element();
describe('O model de Element', function () {
  it('possui o nome "User"', function () {
    checkModelName(Element)('Element');
  });

  it('possui as propriedades "element"', function () {
    ['element'].forEach(checkPropertyExists(element));
  });
});
const { expect } = require('chai');
const sinon = require('sinon');

const elementService = require('../../../src/services/element.service');
const { Element } = require('../../../src/models');
const { allElements } = require('./mocks/element.mock');

describe('o Service de Element', function () {
  afterEach(sinon.restore);

  it('recuperando todos os Elements', async function () {
    sinon.stub(Element, 'findAll').resolves(allElements);

    const result = await elementService.getAllElements();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(allElements);
  });

  it('recuperando um element pelo id valido', async function () {
    sinon.stub(Element, 'findByPk').resolves(allElements[0]);

    const result = await elementService.getElementById(1);

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(allElements[0]);
  });
  
  it('recuperando um element pelo id invalido', async function () {
    sinon.stub(Element, 'findByPk').resolves(undefined);

    const result = await elementService.getElementById(1111);

    expect(result.type).to.be.equal('not found');
    expect(result.message).to.be.equal('Element not found');
  });

  it('recuperando um element pelo element valido', async function () {
    sinon.stub(Element, 'findOne').resolves(allElements[0]);

    const result = await elementService.getElementByName('Bug');

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(allElements[0]);
  });
  
  it('recuperando um element pelo name invalido', async function () {
    sinon.stub(Element, 'findOne').resolves(undefined);

    const result = await elementService.getElementByName('bugs');

    expect(result.type).to.be.equal('not found');
    expect(result.message).to.be.equal('Element not found');
  });

  it('inserindo um element com input valido', async function () {
    sinon.stub(Element, 'findAll').resolves(allElements);
    sinon.stub(Element, 'create').resolves({ id: 22 });

    const result = await elementService.createElement('sand');

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal('element registry with id 22');
  });

  it('inserindo um element repetido', async function () {
    sinon.stub(Element, 'findAll').resolves(allElements);

    const result = await elementService.createElement('Fire');

    expect(result.type).to.be.equal('error');
    expect(result.message).to.be.equal('element exist');
  });

  it('inserindo um element sem parâmetro', async function () {
    sinon.stub(Element, 'findAll').resolves(allElements);

    const result = await elementService.createElement('');

    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.equal('"element" is not allowed to be empty');
  });

  it('inserindo um element com menos de 3 caracteres', async function () {
    sinon.stub(Element, 'findAll').resolves(allElements);

    const result = await elementService.createElement('pá');

    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.equal('"element" length must be at least 3 characters long');
  });

  it('inserindo um element sendo número', async function () {
    sinon.stub(Element, 'findAll').resolves(allElements);

    const result = await elementService.createElement(2222);

    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.equal('"element" must be a string');
  });

  it('atualizando um element com inputs valido', async function () {
    sinon.stub(Element, 'findByPk').resolves(allElements[0]);
    sinon.stub(Element, 'update').resolves([1]);

    const result = await elementService.updateElement('Bug', 1);

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal(allElements[0]);
  });

  it('atualizando um element inexistente', async function () {
    sinon.stub(Element, 'findByPk').resolves(undefined);

    const result = await elementService.updateElement('Fire', 11111);

    expect(result.type).to.be.equal('not found');
    expect(result.message).to.be.equal('Element not found');
  });

  it('atualizando um element sem parâmetro', async function () {
    sinon.stub(Element, 'findByPk').resolves(allElements[0]);

    const result = await elementService.updateElement('', 1);

    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.equal('"element" is not allowed to be empty');
  });

  it('atualizando um element com menos de 3 caracteres', async function () {
    sinon.stub(Element, 'findByPk').resolves(allElements[0]);
    
    const result = await elementService.updateElement('pá', 1);

    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.equal('"element" length must be at least 3 characters long');
  });

  it('atualizando um element sendo número', async function () {
    sinon.stub(Element, 'findByPk').resolves(allElements[0]);

    const result = await elementService.updateElement(2222, 1);

    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.equal('"element" must be a string');
  });

  it('deletando um element com inputs valido', async function () {
    sinon.stub(Element, 'findByPk').resolves(allElements[0]);
    sinon.stub(Element, 'destroy').resolves([1]);

    const result = await elementService.deleteElement(1);

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal([]);
  });

  it('deletando um element inexistente', async function () {
    sinon.stub(Element, 'findByPk').resolves(undefined);

    const result = await elementService.deleteElement(11111);

    expect(result.type).to.be.equal('not found');
    expect(result.message).to.be.equal('Element not found');
  });
});
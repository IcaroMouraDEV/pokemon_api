const { expect } = require('chai');
const sinon = require('sinon');
const { elementModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { allElements } = require('./mocks/element.mock');

describe('testando as funções da camada models do element', function () {
  afterEach(sinon.restore);

  it('a função findAll retorna todos os elements', async function () {
    sinon.stub(connection, 'execute').resolves([allElements]);

    const result = await elementModel.findAll();

    expect(result).to.deep.equal(allElements);
  });

  it('a função findById com o id correto retorna o element', async function () {
    sinon.stub(connection, 'execute').resolves([[allElements[0]]]);

    const result = await elementModel.findById(1);

    expect(result).to.deep.equal(allElements[0]);
  });
});
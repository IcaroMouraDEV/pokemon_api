const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const elementService = require('../../../src/services/element.service');
const elementController = require('../../../src/controllers/element.controller');
const { allElements } = require('./mocks/element.mock');

const notFound = 'Element not found';

describe('Os Endpoints POST, PUT, DELETE de Element', function () {
  afterEach(sinon.restore);

  it('inserindo Element com input valido', async function () {
    const res = {};
    const req = { body: { element: 'DragonFairy' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'createElement')
      .resolves({ type: null, message: 'element registry with id 3' });

    await elementController.createElement(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ message: 'element registry with id 3' });
  });

  it('inserindo Element repetido', async function () {
    const res = {};
    const req = { body: { element: 'Fire' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'createElement')
      .resolves({ type: 'error', message: 'element exists' });

    await elementController.createElement(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: 'element exists' });
  });

  it('inserindo Element sem parâmetro', async function () {
    const res = {};
    const req = { body: { element: '' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'createElement')
      .resolves({ type: 'INVALID_VALUE', message: '"element" is not allowed to be empty' });

    await elementController.createElement(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"element" is not allowed to be empty' });
  });

  it('inserindo Element com menos de 3 caracteres', async function () {
    const res = {};
    const req = { body: { element: 'pá' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'createElement')
      .resolves({
        type: 'INVALID_VALUE',
        message: '"element" length must be at least 3 characters long',
      });

    await elementController.createElement(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({
      message: '"element" length must be at least 3 characters long',
    });
  });

  it('inserindo Element sendo número', async function () {
    const res = {};
    const req = { body: { element: 1111 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'createElement')
      .resolves({ type: 'INVALID_VALUE', message: '"element" must be a string' });

    await elementController.createElement(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"element" must be a string' });
  });

  it('Deletando Element com id valido', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'deleteElement')
      .resolves({ type: null, message: [] });

    await elementController.removeElement(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith([]);
  });

  it('Deletando Element com id invalido', async function () {
    const res = {};
    const req = { params: { id: 1111 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'deleteElement')
      .resolves({ type: 'not found', message: notFound });

    await elementController.removeElement(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: notFound });
  });

  it('atualizando Element com inputs validos', async function () {
    const res = {};
    const req = { body: { element: 'Bug' }, params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'updateElement')
      .resolves({ type: null, message: allElements[0] });

    await elementController.updateElement(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allElements[0]);
  });

  it('atualizando Element com id invalido', async function () {
    const res = {};
    const req = { body: { element: 'Bug' }, params: { id: 1111 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'updateElement')
      .resolves({ type: 'not found', message: notFound });

    await elementController.updateElement(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Element not found' });
  });

  it('atualizando Element com element com menos de 3 caracteres', async function () {
    const res = {};
    const req = { body: { element: 'Bu' }, params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'updateElement')
      .resolves({
        type: 'INVALID_VALUE',
        message: '"element" length must be at least 3 characters long',
      });

    await elementController.updateElement(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({
      message: '"element" length must be at least 3 characters long',
    });
  });
});
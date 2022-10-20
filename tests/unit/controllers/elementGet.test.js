const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const elementService = require('../../../src/services/element.service');
const elementController = require('../../../src/controllers/element.controller');
const { allElements } = require('./mocks/element.mock');

const notFound = 'Element not found';

describe('Os endpoints GET de Element', function () {
  afterEach(sinon.restore);

  it('recuperando todos os Elements', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'getAllElements')
      .resolves({ type: null, message: allElements });

    await elementController.getAllElements(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allElements);
  });

  it('recuperando Element pelo id', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'getElementById')
      .resolves({ type: null, message: allElements[0] });

    await elementController.getElementByIdOrName(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allElements[0]);
  });

  it('recuperando Element pelo name', async function () {
    const res = {};
    const req = { params: { id: 'Bug' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'getElementById')
      .resolves({ type: 'not found', message: notFound });
    sinon
      .stub(elementService, 'getElementByName')
      .resolves({ type: null, message: allElements[0] });

    await elementController.getElementByIdOrName(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allElements[0]);
  });

  it('recuperando Element pelo id invalido', async function () {
    const res = {};
    const req = { params: { id: 111 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'getElementById')
      .resolves({ type: 'not found', message: notFound });
    sinon
      .stub(elementService, 'getElementByName')
      .resolves({ type: 'not found', message: notFound });

    await elementController.getElementByIdOrName(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: notFound });
  });

  it('recuperando Element pelo name invalido', async function () {
    const res = {};
    const req = { params: { id: 'bugssss' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(elementService, 'getElementByName')
      .resolves({ type: 'not found', message: notFound });

    await elementController.getElementByIdOrName(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: notFound });
  });
});
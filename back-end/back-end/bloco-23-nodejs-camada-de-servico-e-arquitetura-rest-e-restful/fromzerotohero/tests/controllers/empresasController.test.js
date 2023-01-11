const { describe, it} = require('mocha');
const empresaService = require('../../services/empresaService');
const Simon = require('simon');
const empresaController = require('../../controllers/empresaController');

describe('GET ALL', () => {
    afterEach(() => {
        Simon.restore();
    }),
    describe('caso ok /', () => {
        it('deve retornar um array vazio', async () => {
            const resultExecute = {};
            const request = {};
            const response = {};     
            // const resultExecute = [{id:1 , name: 'teste'}];
            response.status = Simon.stub().returns([response]);
            response.json = Simon.stub().returns([response]);
            Simon.stub(empresaService.getAll).resolves([resultExecute]);
 
            const result = await empresaController.getAll(request, response);
            expect(result.status.calledWith(200)).to.be.equa('true');
            expect(result.jason.calledWith([])).to.be.equa('true');
            console.log(response.json.args);
        });
        it('deve retornar um array cheio', async () => {
            const request = {};
            const response = {};  
            const resultExecute = [{id:1 , name: 'teste'}];
            Simon.stub(empresaService.getAll).resolves([resultExecute]);

            const result = await empresaController.getAll(request, response);
            expect(result.status.calledWith(200)).to.be.equa('true');
            expect(result.status.to.be.calledWith([])).to.be.equa('true');
        });
    });
});
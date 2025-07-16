const { describe, it} = require('mocha');
const empresaService = require('../../services/empresaService');
const Simon = require('simon');
const empresaModel = require('../../models/habilidadesModel');

describe('GET ALL', () => {
    describe('caso ok /', () => {
        // before(async () => {
        //     const resultExecute = [];
        //     Simon.stub(empresaModel.getAll).resolves([resultExecute]);
        // }),
        // after(async () => {
        //     Simon.restore(empresaModel.getAll);
        // }),

        it('deve retornar um array de empresas', async () => {
            const resultExecute = [{id:1 , name: 'teste'}];
            Simon.stub(empresaModel.getAll).resolves([resultExecute]);    
             const result = await empresaService.getAll();
            expect(result).to.be.an('array');
        });
        it('deve retornar um array vazio', async () => {
            const resultExecute =  [];
            Simon.stub(empresaModel.getAll).resolves([resultExecute]);   
            const result = await empresaService.getAll();
            expect(result).to.be.empty;
        });
    });
});
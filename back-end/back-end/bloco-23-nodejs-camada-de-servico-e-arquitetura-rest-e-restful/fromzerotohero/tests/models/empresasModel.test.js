const { describe, it} = require('mocha');
const empresaModel = require('../../models/habilidadesModel');
const Simon = require('simon');
const connection = require('../../models/connection');

describe('GET ALL', () => {
    describe('caso ok /', () => {
        // before(async () => {
        //     const resultExecute = [];
        //     Simon.stub(connection.execute).resolves([resultExecute]);
        // }),
        // after(async () => {
        //     Simon.restore(connection.execute);
        // }),

        it('deve retornar um array de empresas', async () => {
            const resultExecute = [{id:1 , name: 'teste'}];
            Simon.stub(connection.execute).resolves([resultExecute]);    
             const result = await empresaModel.getAll();
            expect(result).to.be.an('array');
        });
        it('deve retornar um array vazio', async () => {
            const resultExecute =  [];
            Simon.stub(connection.execute).resolves([resultExecute]);   
            const result = await empresaModel.getAll();
            expect(result).to.be.empty;
        });
    });
});
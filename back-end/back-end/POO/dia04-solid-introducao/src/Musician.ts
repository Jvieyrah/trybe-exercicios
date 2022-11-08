import { Flute, Drums, Guitar, Instrument } from './instruments';

export default class Musician {
    // public flute: Flute;

    constructor(public name: string,
        public instrument: Instrument = new Flute('Minha flauta')) { }
        // this.flute = new Flute('minha flauta');
    
    public play(): void {
        this.instrument.play();
        console.log(`${this.name} é quem está comandando a emissão das melodias`);

      }
    }

    const musician = new Musician('Márcia');
    const musician2 = new Musician('Henry', new Guitar('Minha guitarra'));
    const musician3 = new Musician('Márcia', new Drums('Minha bateria'));

musician.play();
musician2.play();
musician3.play();
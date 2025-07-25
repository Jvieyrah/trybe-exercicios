interface Instrument {
    name: string;
    play(): void;
  }

 class Flute implements Instrument {
    /* Não se preocupe com problemas do eslint, estamos usando um exemplo didático */
    constructor(public name: string) { }
    public play(): void {
      console.log(`${this.name} está emitindo melodias`);
    }
  }

  class Drums implements Instrument {
    constructor(public name: string) { }
  
    public play(): void {
      console.log(`${this.name} está fazendo o ar vibrar bem forte`);
    }
  }
  
  class Guitar implements Instrument {
    constructor(public name: string) { }
  
    public play(): void {
      console.log(`${this.name} está vibrando suas cordas`);
    }
  }

export { Flute, Drums, Guitar, Instrument};
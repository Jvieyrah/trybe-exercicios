class Animal {
    constructor(public name: string, private birthDate: Date) { }

    get age() {
        const timeDiff = Math.abs(
            Date.now() -
            new Date(this.birthDate).getTime()
          );
          return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        }
      }

      

class Mammal extends Animal {
    walk() {
      console.log(`${this.name} está andando!`);
    }
  }

  class Bird extends Animal {
    fly() {
      console.log(`${this.name} está voando!`);
    }
  }

const Parrot = new Bird('Papagaio', new Date('2019-01-01'));


  const tiger = new Mammal(
    'Tigre',
    new Date(Date.parse('May 03, 2020')),
  );

  const main = (animal: Animal) => {
    console.log(animal.age);
  }

  main(tiger);
tiger.walk();

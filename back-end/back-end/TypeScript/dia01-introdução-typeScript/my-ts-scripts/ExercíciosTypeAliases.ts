import { type } from "os";

type Bird = {
    name: string;
    color: string;
    fly: boolean;
};


type Sum = (x: number, y: number) => number;


type Adress = {
    street: string;
    number: number;
    city: string;
    state: string;
    country: string;
    zioCode: number;
}; 

const states = [ 'liquid', 'solid', 'gas', 'plasma' ];

function materyState( state: number | string): string {
    if (typeof state === "number") {
        return states[state];
    } else {
        return state;
    }
}

type CPF = number | string;

type OS = 'linux' | 'windows' | 'macOS';

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';


class Dog {
    name: string;
    breed: string;
    bark?: boolean;

    constructor(name: string, breed: string, bark?: boolean) {
        this.name  = name;
        this.breed  = breed;
        this.bark  = bark;
    }

    speak(): void {
        console.log(`${this.name} não está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }

    barking(): void {
        if (this.bark) {
            console.log(`${this.name} está latindo.`);
        }
        console.log(`${this.name} não está latindo.`)
    }
}

const suzie = new Dog('Suzie', 'Poodle', true);
const bob = new Dog('Bob', 'Pug', false);

console.log('Suzie', suzie);
suzie.barking();
bob.barking();

class House {
    owner: string;
    address: string;
    color: string;
    area: number;
  
    constructor(owner: string, address: string, color: string, area: number) {
      this.owner = owner;
      this.address = address;
      this.color = color;
      this.area = area;
    }
  }

  class Flight {
    origin: string;
    destination: string;
    departureDate: Date;
    arrivalDate: Date;
    passengers: number;
  
  
    constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
      this.origin = origin;
      this.destination = destination;
      this.departureDate = departureDate;
      this.arrivalDate = arrivalDate;
      this.passengers = passengers;
    }
  }
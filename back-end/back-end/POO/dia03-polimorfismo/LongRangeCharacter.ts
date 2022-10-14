import Character from "./character";

export default class LongRangeCharacter extends Character {
    constructor(protected name: string) {
        super();
        name = this.name;
    }

    talk(): void {
        console.log(`I'm ${this.name}, a long range character`);
    }
    specialMove(): void {
        console.log(`${this.name} uses a special move`);
    }
}
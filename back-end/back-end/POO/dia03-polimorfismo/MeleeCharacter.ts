import Character from "./character";

export default class MeleeCharacter extends Character {
    constructor(protected name: string) {
        super();
        name = this.name;
    }

    talk(): void {
        console.log(`I'm ${this.name}, a melee character`);
    }
    specialMove(): void {
        console.log(`${this.name} uses a special move`);
    }
}
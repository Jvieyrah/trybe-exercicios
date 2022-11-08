"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeleeCharacter_1 = require("./MeleeCharacter");
var LongRangeCharacter_1 = require("./LongRangeCharacter");
var meleeCharacter = new MeleeCharacter_1.default("Link");
var longRangeCharacter = new LongRangeCharacter_1.default("Zelda");
function characterCall(character) {
    character.talk();
    character.specialMove();
}
characterCall(meleeCharacter);
characterCall(longRangeCharacter);

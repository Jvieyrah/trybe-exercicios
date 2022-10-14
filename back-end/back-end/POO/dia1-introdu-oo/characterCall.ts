import MeleeCharacter from "./MeleeCharacter";
import LongRangeCharacter from "./LongRangeCharacter";

const meleeCharacter = new MeleeCharacter("Link");
const longRangeCharacter = new LongRangeCharacter("Zelda");

function characterCall(character: MeleeCharacter | LongRangeCharacter) {
    character.talk();
    character.specialMove();
}

characterCall(meleeCharacter);
characterCall(longRangeCharacter);


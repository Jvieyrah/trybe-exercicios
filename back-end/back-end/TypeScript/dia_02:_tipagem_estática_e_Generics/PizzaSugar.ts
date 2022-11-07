import Pizza from "./Pizza";
import { Sugar } from "./PizzaFlavorsTypes";

interface PizzaSugar extends Pizza { // <- isso é uma interface
    flavor: Sugar; // <- isso é um type alias
    slices: 4; // <- isso é um type alias
}

export default PizzaSugar;
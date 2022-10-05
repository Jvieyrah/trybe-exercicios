import Pizza from "./Pizza";
import { Common } from "./PizzaFlavorsTypes";

interface PizzaComon extends Pizza { // <- isso é uma interface
    flavor: Common; // <- isso é um type alias
}

export default PizzaComon;

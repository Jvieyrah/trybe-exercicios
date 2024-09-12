import Pizza from "./Pizza";
import { Vegetarian } from "./PizzaFlavorsTypes";

interface PizzaVegetarian extends Pizza { // <- isso é uma joint
    flavor: Vegetarian; // <- isso é um type alias
}

export default PizzaVegetarian;
import Car from "./Car";
// import Pizza from "./Pizza";
import PizzaSugar from "./PizzaSugar";
import PizzaVegetarian from "./PizzaVegetarian";
import PizzaCommon from "./PizzaCommon";

const gol = new Car("Volkswagen", "prata", 4);

// gol.openTheDoor(Doors.DRIVER);
// gol.closeTheDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();

const calabresa: PizzaCommon = {
    flavor: "Calabresa",
    slices: 8
  }

  console.log(calabresa);

  const frango : PizzaCommon = {
    flavor: "Frango",
    slices: 6
  }
  
  console.log(frango);
  
  const pepperoni: PizzaCommon = {
    flavor: "Pepperoni",
    slices: 6
  }
  
  console.log(pepperoni);

  const marguerita: PizzaVegetarian = {
    flavor: "Marguerita",
    slices: 8
  }
  
  console.log(marguerita);

  const palmito: PizzaVegetarian = {
    flavor: "Palmito",
    slices: 8
  }
  
  console.log(palmito);
  
  
  const goiabadaEQueijo: PizzaSugar = {
    flavor: "Goiabada com Queijo",
    slices: 4
    }

    console.log(goiabadaEQueijo);

    type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

    function myFilter<t>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
        const newArray: Array<T> = [];
        for (let i = 0; i < array.length; i++) {
          if (callback(array[i], i, array)) {
            newArray.push(array[i]);
          }
        }
        return newArray;
      }
  
      console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));

      console.log(myFilter(["a", "b", "c"], (item, index, array) => {
        return item !== "a"
      }));

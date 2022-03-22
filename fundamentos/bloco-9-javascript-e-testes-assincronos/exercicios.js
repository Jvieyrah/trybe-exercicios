// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     setTimeout(() => console.log("Returned planet: ", mars), 4000);
//   };
  
//   getPlanet(); // imprime Marte depois de 4 segundos

//   const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// // const sendMarsTemperature = () => {
// //     const currentTemperature = getMarsTemperature();
// //     setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());
// // };
// // sendMarsTemperature();

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;


// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

//   const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

//   const sendMarsTemperature = (onSuccess, onError) => {
//     const currentTemperature = getMarsTemperature();
//     const messageSuccessfullySent = Math.random() <= 0.6;
//     setTimeout(() => {
//         if(messageSuccessfullySent) onSuccess(currentTemperature)
//         else onError('Robot is busy');
//     }, messageDelay());
//   }
//   const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);
//   sendMarsTemperature(temperatureInFahrenheit, handleError);
//   sendMarsTemperature(greet, handleError);

// ; // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// const uppercase = (str, callback) => {
//     setTimeout(() => {
//       callback(str.toUpperCase());
//     }, 500);
//   };

//   it('uppercase "test" to equal "TEST"', (done) => {
//     uppercase('test', (str) => {
//       try {
//         expect(str).toBe('TEST');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });


const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      ability: 'Razor Leaf',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      ability: 'Ember',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      ability: 'Water Gun',
    },
  ];
  
  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find(filter) === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
      const pokemon = pokemons.find(filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  getPokemonDetails();
  
  module.exports = {
    getPokemonDetails,
  };
  getPokemonDetails(
    (pokemon) => pokemon.name === 'Bulbasaur',
    (error, message) => {
      if (error) {
        console.log(error);
      } else {
        console.log(message);
      }
    }
  );
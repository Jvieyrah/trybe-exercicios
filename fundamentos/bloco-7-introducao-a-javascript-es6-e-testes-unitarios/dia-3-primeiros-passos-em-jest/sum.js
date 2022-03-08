// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//       throw new Error('parameters must be numbers');
    
//     }
//   try{
//     return a + b;}
//     catch{
//     return Error(message);}
//   }
  
//   console.log(sum("5", 5));

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }
  
  module.exports = sum;
  
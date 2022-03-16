const sum = (...args) =>  args.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum(10,20,50));
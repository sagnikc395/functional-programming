// part1 -> (_,curry,add)
import * as R from "rambda";

//__ -> its a special palceholder value used to specify 'gaps'
// in curry functions, allowing partial application of any combination of arguments,
// regardlkess of their positions.

// with __,  we can vary the order in which we apply the transformations

//curry -> takes a series of different arguments and into a series of arguments,

const f = (x, y, z) => x + y + z;

//curry version of f , only allow one way of calling it
const g = (x) => (y) => (z) => x + y + z;

//all ramda functions are autocurried by default
g(1)(2)(3);
g(1)(2, 3);
g(1, 2)(3);
g(1, 2, 3);

//we apply the first arugment, then next etc.
// using __, we can change the order of the curry
//normal currying in ramda
console.log(R.add(10)(20));
const f2 = R.add(10);
console.log(f2(70));

//we could , also partially apply the second argument , wait for the first and execute 2nd first
const dec = R.subtract(R.__, 1);
// const op = dec(10);
// console.log(op);

const dec1 = R.subtract(1);
const dec2 = R.subtract(R.__, 1);

console.log(dec1(10));
console.log(dec2);

//currying the arguments
console.log(R.add(10)(20));


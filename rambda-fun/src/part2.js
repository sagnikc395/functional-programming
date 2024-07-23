//addindex, adjust

import * as R from "rambda";

//r.map takes a function , takes a double and a iteratble
//double is a function , that we will apply on the iterable.

// x is the mapper that we will map, we can change acording to our needs
const mutiplier = (x) => R.multiply(x);

console.log(R.map(mutiplier(10), [1, 2, 3, 4]));

//to make use of the index , we can use indexplusValue
// addIndex -> creates a  new list iteration from an existing one by adding 2
// new parameters to its callback function -> the current index and the entire list

// this would trun, R.map taht into one that is more closely resembles
// Array.prototype.map.
// This will only work for functions in which the itertation callback functions is the first
// parameter , and where the list is the last parameter.

const indexPlusValue = (v, i) => i + v;
//which is bascially add defined.


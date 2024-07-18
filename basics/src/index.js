// an exploration of functional programming in Javascript

//since we are doing functional programming we can do a lot of composition.

/**
 * Objective :
 * from coinmarket.com using bitcoin and ehterum prices, define a monte carlo simulation.
 */
import * as R from "rambda";

//create a pipeline of methods -> composes these methods together
// in a reverse order

// functional programming -> data goes last.
R.pipe(
  //....
  //methods that have to be applied on them
  console.log
)(
  //i.e the paths to the files we have created
  ["./data/eth.csv", "./data/btc.csv"]
);

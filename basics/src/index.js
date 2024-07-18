// an exploration of functional programming in Javascript

//since we are doing functional programming we can do a lot of composition.

/**
 * Objective :
 * from coinmarket.com using bitcoin and ehterum prices, define a monte carlo simulation.
 */
import * as R from "rambda";
import * as fs from "fs";

//read the files as path and curries on it
const readF = (path) => fs.readFileSync(path, { encoding: "utf-8" });
//create a pipeline of methods -> composes these methods together
// in a reverse order

// functional programming -> data goes last.
R.pipe(
  //....
  //methods that have to be applied on them
  //console.log
  //adding read file to the pipeline
  // map the function readF to the R and log it
  R.map(readF),
  //want to go through the files and want to structure it
  // rows seperated by \n
  R.map(R.split("\n")),
  // we can apply it and curry it as it will work on the latest value
  // when we get it from the pipeline, map will only get the data.
  // so it will be array of arrays, one from btc, one from eth
  console.log
)(
  //i.e the paths to the files we have created
  ["./data/eth.csv", "./data/btc.csv"]
);

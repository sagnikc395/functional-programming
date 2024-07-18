// an exploration of functional programming in Javascript

//since we are doing functional programming we can do a lot of composition.

/**
 * Objective :
 * from coinmarket.com using bitcoin and ehterum prices, define a monte carlo simulation.
 */
import * as R from "rambda";
import * as fs from "fs";

//read the files as path and curries on it
const readFileSync = (path) => fs.readFileSync(path, { encoding: "utf-8" });
//create a pipeline of methods -> composes these methods together
// in a reverse order

const readData = R.pipe(
  //readF is the function read the pipeline
  R.converge(R.concat, [
    R.pipe(R.split("/"), R.split(".")),
    R.identity, //extract btc or eth from the path ,
    readFileSync, //read the file contents
  ])
);

// functional programming -> data goes last.
R.pipe(
  //....
  //methods that have to be applied on them
  //console.log
  //adding read file to the pipeline
  // map the function readF to the R and log it
  R.map(readData),

  //we want not just to read the file, we want to prepend the type
  // to the string that we are reading
  //want to go through the files and want to structure it
  // rows seperated by \n
  R.map(R.split("\n")),
  // we can apply it and curry it as it will work on the latest value
  // when we get it from the pipeline, map will only get the data.
  // so it will be array of arrays, one from btc, one from eth
  // removing the last 1 element
  R.map(R.dropLast(1)),

  //now split by the \r seperator
  //   R.map(R.split("\r")),
  // we now have a array of arrays, not a string
  // so we need to map over the first array and then map over the second array
  // map over these data , map over the files and split over \r
  R.map(R.map(R.split("\t"))),
  //only want the first 2 columns
  R.map(R.map(R.take(2))),
  console.log
)(
  //i.e the paths to the files we have created
  //instead of array we are converting to object to
  // make easier to mapObjIndexed
  ["./data/eth.csv", "./data/btc.csv"]
  //   btc: "./data/btc.csv",
  //   eth: "./data/eth.csv",
);

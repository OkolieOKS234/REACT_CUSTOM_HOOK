// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cryptocurrencies, { useCryptocurrency } from "./data";
import cars from "./practice";

// const [cat, dog] = animals;
// console.log(dog);

// const {name, sound} = cat;
// console.log(sound);

// OR
// const { name: catName, sound: catSound } = cat;
// console.log(`${catSound}`);
/*
Destructuring nested objects
*/
const [bitcoin, Ethereum] = cryptocurrencies;
// const {
//   name,
//   shortForm,
//   fullDetails: { yearCreated, allTimeHigh },
// } = bitcoin;

const [cryptocurrency, checkshortForm] = useCryptocurrency(bitcoin);
console.log(cryptocurrency);

console.log(cars);

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
} = tesla;
console.log(tesla);

// console.log(`${allTimeHigh}`);
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

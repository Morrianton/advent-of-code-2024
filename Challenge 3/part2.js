const fs = require('fs');
const { mul } = require('./utils');

const products = [];
let multiplicationEnabled = true;

fs.readFile("real_input.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const pattern = new RegExp(/do\(\)|mul\(\d{1,3},\d{1,3}\)|don\'t\(\)/, "g");
  const capturedMethods = data.matchAll(pattern);
  for (const method of capturedMethods) {
    if (method[0] === "do()") multiplicationEnabled = true;

    if (method[0] === "don't()") multiplicationEnabled = false;

    if (multiplicationEnabled) {
      if (method[0] !== "do()" && method[0] !== "don't()") {
        products.push(eval(method[0]));
      }
    }
  }
  console.log(products.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ));
});

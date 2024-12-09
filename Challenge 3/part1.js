const fs = require('fs');
const { mul } = require('./utils');

const products = [];

let multiplicationEnabled = true;

fs.readFile("real_input.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const pattern = new RegExp(/mul\(\d{1,3},\d{1,3}\)/, "g");
  const capturedMethods = data.matchAll(pattern);
  for (const method of capturedMethods) {
    if (multiplicationEnabled) {
      
    } 
    products.push(eval(method[0]));
  }
  console.log(products.length)
  console.log(products.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ));
});

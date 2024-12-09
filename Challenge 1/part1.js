const constants = require('./constants');
const inputs = constants.inputs;
const array1 = [];
const array2 = [];

const tuples = inputs.trim().split('\n').map(line => {
  const [a, b] = line.trim().split(/\s+/);
  return [parseInt(a, 10), parseInt(b, 10)];
});

function main() {
  tuples.forEach(tuple => {
    array1.push(tuple[0]);
    array2.push(tuple[1]);
  });

  // for (let i = 0; i < 5; i++) {
  //   console.log(array1[i]);
  // }
  
  // console.log('\n');
  
  // for (let i = 0; i < 5; i++) {
  //   console.log(array2[i]);
  // }

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  // for (let i = 0; i < 5; i++) {
  //   console.log(array1[i]);
  // }

  // console.log('\n');

  // for (let i = 0; i < 5; i++) {
  //   console.log(array2[i]);
  // }

  const differences = [];

  for (let i = 0; i < array1.length; i++) {
    differences.push(Math.abs(array1[i] - array2[i]));
  }

  // console.log('\n');

  // for (let i = 0; i < 5; i++) {
  //   console.log(differences[i]);
  // }

  const totalDifference = differences.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(totalDifference);
}

main();

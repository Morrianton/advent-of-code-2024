const constants = require('./constants');
const inputs = constants.inputs;
const array1 = [];
const array2 = [];

const tuples = inputs.trim().split('\n').map(input => {
  const [a, b] = input.trim().split(/\s+/);
  return [parseInt(a, 10), parseInt(b, 10)];
});

// for (let i = 0; i < 5; i++) {
//   console.log(tuples[i]);
// }

tuples.forEach(([a, b]) => {
  array1.push(a);
  array2.push(b);
});

// for (let i = 0; i < 5; i++) {
//   console.log(array1[i]);
// }

// console.log('\n');

// for (let i = 0; i < 5; i++) {
//   console.log(array2[i]);
// }

const similarityScores = [];

for (let i = 0; i < array1.length; i++) {
  let counter = 0;

  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) counter++;
  }

  similarityScores.push(counter * array1[i]);

  // if (counter > 0) {
  //   console.log('value: ', array1[i]);
  //   console.log('instances: ', counter);
  //   console.log('similarity score: ', counter * array1[i]);
  //   console.log('\n');
  // }
}

const totalScore = similarityScores.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(totalScore);

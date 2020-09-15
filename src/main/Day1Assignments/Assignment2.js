
const dataset1 = [100, 2, 5, 12, 0];
const dataset2 = [-5, -10, 100, 20, 30, -30, 12];


var number1 = dataset1[0];
var number2 = dataset2[0];

function minNumber(dataset) {
  var minNumber = dataset[0]
  for (let i of dataset1) {
    if (i < number1)
      minNumber = i;
  }
  return minNumber
}

console.log("smallest no in [" + dataset1 + "] is  " + minNumber(dataset1));
console.log("smallest no in [" + dataset1 + "] is  " + minNumber(dataset2));

module.exports = minNumber;
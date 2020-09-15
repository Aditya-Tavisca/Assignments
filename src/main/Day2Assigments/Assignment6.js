class ArrayComparison {
  arrayComparisonLogic(dataSet1, dataSet2) {
    var a1, a2, i, j;
    var c = 0;
    if (dataSet1.length < dataSet2.length) {
      a1 = dataSet1;
      a2 = dataSet2;
    }
    else {
      a1 = dataSet2;
      a2 = dataSet1;
    }
    for (i = 0; i < a1.length; i++) {
      for (j = 0; j < a2.length; j++) {
        if (a1[i] == a2[j]) {
          c++;
          break;
        }
      }
    }
    if (c == i && dataSet1.length == dataSet2.length) {
      return "A and B are Equal";
    } else if (c == i && dataSet1.length < dataSet2.length) {
      return "A is Subset of B";
    } else if (c == i && dataSet1.length > dataSet2.length) {
      return "B is Subset of A";
    } else {
      return "A and B are not equal";
    }

  }

  arrayComaprison(dataSet1, dataSet2) {
    let subset1 = dataSet2.every(dataElement => dataSet1.includes(dataElement));  //compare every arrray 2 elements with array 1 elements 
    let subset2 = dataSet1.every(dataElement => dataSet2.includes(dataElement));
    if (subset1 == true && subset2 == false)
      return "A is subset of B";
    else if (subset1 == false && subset2 == true)
      return "B is subset of A";
    else if (subset1 == true && subset2 == true)
      return "A and B are Equal";
    else
      return "A and B are not equal";
  }
}
let dataSet1 = [1, 2, 3, 4, 5];
let dataSet2 = [1, 2, 3];
var object=new ArrayComparison()
console.log(object.arrayComaprison(dataSet1, dataSet2));
console.log(object.arrayComaprison(dataSet2, dataSet1));
console.log(object.arrayComaprison([1, 2, 3], [1, 2, 3]));
console.log(object.arrayComaprison([1, 2.56], [1, 2, 3, 4]));

module.exports=ArrayComparison



// use inbuilt function
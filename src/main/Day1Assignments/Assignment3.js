var arr = [100, 20, 15, 30, 6, 9, 10, 12, 150]


function isDivisible(arr) {
  var divisible = ''
  for (let i of arr) {
    if (i % 15 == 0) {
      divisible += i + " Divisible by 15\n";
    }
    else if (i % 5 == 0) {
      divisible += i + " Divisible by 5\n";
    }
    else if (i % 3 == 0) {
      divisible += i + " Divisible by 3\n";
    }
  }
  return divisible
}

console.log(isDivisible(arr))

module.exports = isDivisible;


// see problem statement



  //   divsible=""
  //     if(i%5==0){
  //         divsible+="5"
  //       }
  //     if(i%3==0){
  //        if(divsible=="")   
  //          divsible+="3"
  //         else
  //          divsible+=",3"  
  //       }
  //     if(i%15==0){
  //       if(divsible=="")   
  //       divsible+="15"
  //      else
  //       divsible+=",15"  
  //  }
      // console.log(i+" is divisible by "+divsible)
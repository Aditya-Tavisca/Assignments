// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function reverseNumberLogic(number){
    let reverseNumber;
    reverseNumber=0;
    while(number!=0){  
      let num=number%10;  
      reverseNumber=reverseNumber*10+num;  
      number=parseInt(number/10);
    }
    return reverseNumber;
}

var c=0
function recurrsionreverse(number,reverseNum=0){//123
  if(number==0){
      return reverseNum
    }
    else{
      reverseNum=reverseNum*10+number%10 
      return recurrsionreverse(parseInt(number/10),reverseNum)//12 3
    }
}

function reverseNumber(number){
  return parseInt(number.toString().split("").reverse().join(""));
}

// console.log(reverseNumberLogic(32243));
// console.log(reverseNumber(32243));
console.log(recurrsionreverse(32243))

// use recurrsion
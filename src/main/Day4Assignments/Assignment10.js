function factorialWithRecursion(num){
    if(num>=1)
       return num*factorialWithRecursion(num-1) //5 * fact
    else 
       return 1  
}


function factorialLogic(num){
   let fact=1
     while(num>=1){
        fact*=num
        num--
     }
     return fact
}


console.log(factorialWithRecursion(5))

console.log(factorialLogic(5))

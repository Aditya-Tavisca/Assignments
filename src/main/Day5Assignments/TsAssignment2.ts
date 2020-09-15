// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

export class FactorialOfNumber{
    
     factorialWithRecurssion(number: number): number {
    if (number == 1)
        return 1;
    else
        return number * this.factorialWithRecurssion(number - 1);
}

 factorialWithLogic(number: number): number {
    let factorial: number = 1;
    while (number > 1) {
        factorial *= number--;
    }
    return factorial;
}}

var fact=new FactorialOfNumber()

// console.log("Factorial Of number with Logic " + fact.factorialWithLogic(5));

// console.log("Factorial Of number with recurrsion " + fact.factorialWithLogic(5));

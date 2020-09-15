// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(array,n=1){
    if(n>0)
      return array.slice(0,n);    
    else
      return [];   
} 

function firstwithLogic(array,n=1){
    if(n<=0)
     return [];
    else{
        let firstNElements=[];
        if(n>array.length)
         {
             n=array.length;
         }
        for(let i=0;i<n;i++){
           firstNElements.push(array[i]);
        }
        return firstNElements;
    } 

}

console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2]));
console.log(firstwithLogic([],3));
console.log(firstwithLogic([7, 9, 0, -2],6));
console.log(firstwithLogic([7, 9, 0, -2],-3));
function objectToArray(obj){
     var objectToArrayConversion=Object.entries(obj);
     if(obj.length==0){   
       console.log("The Object is empty ");  
       console.log(objectToArrayConversion);
       }
      else{
          console.log("Object To Array Is :");
          console.log(objectToArrayConversion);
      }
      return objectToArrayConversion
    }

let object={a:1,b:2};
let emptyObject={};
objectToArray(object);
objectToArray(emptyObject); 


module.exports=objectToArray

 

//  Write a function that converts an object into an array, where each element represents a key-value pair.
// Example-
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// Notes
// Return an empty array if the object is empty.

// use inbuilt function


//use predefine functions
function countLegs(arr,animalsType){
     let legs=0;
     for(let str of arr){
         if(animalsType.get(str)==undefined){
             console.log(`The "${str}" is not present in our data source`);
             legs=legs+0
            }
            else{
              legs=legs+animalsType.get(str);
            }
     }
     return legs;
}

var animalsType=new Map([['chickens',2],['cows',4],['pigs',4]]);
let animals=["chickens","cows","pigs","pigs","pigs","cat"];
console.log("The total count of legs is "+countLegs(animals,animalsType));

module.exports=countLegs
//export {countLegs}
// use proper data structure
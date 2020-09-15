export class ReverseNum{
     reverseNumber(number){
        return parseInt(number.toString().split("").reverse().join(""));
      }
}
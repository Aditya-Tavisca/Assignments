//import {minNumber} from "../../Day1Assignments/Assignment2"
const minNumber=require('../../main/Day1Assignments/Assignment2')

test('Test the function should return min value from array',()=>{
    expect(minNumber([1,0,9,8,7])).toBe(0);
})

test('Test the function should return min value from array correctly',()=>{
    expect(minNumber([1,0,9,8,7])).not.toBe(9);
    
})
import {FirstNElements} from '../../main/Day3Assigments/firstNElements'

var object:any;

beforeAll(()=>{
    object=new FirstNElements();
})

test('Check wether the function will return first n elements of array',()=>{
    expect(object.first([1,2,3,4,5,6],3).join(',')).toMatch("1,2,3");
})

test('Check wether the function will return empty array if n is negative',()=>{
    expect(object.first([1,2,3,4,5,6],-3).length).toBe(0);
})

test('Check wether the function will return first elements of array if we didnt pass n',()=>{
    expect(object.first([1,2,3,4,5,6]).join(',')).toMatch("1");
})

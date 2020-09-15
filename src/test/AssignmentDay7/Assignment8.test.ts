import {ReverseNum} from '../../main/Day3Assigments/reverseNum'

var reversenum:any;
beforeAll(()=>{
  reversenum=new ReverseNum();
})

test('test whether function will return proper reverser number or not',()=>{
    expect(reversenum.reverseNumber(123)).toBe(321);
})

test('test whether function will return proper reverser number or not',()=>{
    expect(reversenum.reverseNumber(123)).not.toBe(123);
})
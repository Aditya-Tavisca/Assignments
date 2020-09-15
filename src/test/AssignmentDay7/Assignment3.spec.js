const isDivisible=require('../../main/Day1Assignments/Assignment3')

test('check wether the given number is divisbile by 3',()=>{
    expect(isDivisible([9])).toMatch('9 Divisible by 3');
})

test('check wether the given number is divisbile by 5',()=>{
    expect(isDivisible([20])).toMatch('20 Divisible by 5');
})

test('check wether the given number is divisbile by 15',()=>{
    expect(isDivisible([15])).toMatch('15 Divisible by 15');
})


test('check wether the given number is not divisbile by 3',()=>{
    expect(isDivisible([7])).toMatch('');
})

test('check wether the given number is not divisbile by 5',()=>{
    expect(isDivisible([7])).toMatch('');
})

test('check wether the given number is not divisbile by 15',()=>{
    expect(isDivisible([7])).toMatch('');
})
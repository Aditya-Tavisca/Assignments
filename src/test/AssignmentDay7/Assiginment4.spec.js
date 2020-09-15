const countLegs=require('../../main/Day2Assigments/Assignment4')

test('Test wether countLegs function will give leg count of animal',()=>{
    let animalsType=new Map([['chickens',2],['cows',4],['pigs',4]]);
    let animals=["chickens","cows","pigs","pigs","pigs"];
    expect(countLegs(animals,animalsType)).toBe(18);
})

test('Test wether countLegs function will give proper leg count of animal',()=>{
    let animalsType=new Map([['chickens',2],['cows',4],['pigs',4]]);
    let animals=["chickens","cows","pigs","pigs","pigs"];
    expect(countLegs(animals,animalsType)).not.toBe(22);
})
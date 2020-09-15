const objToArray=require('../../main/Day2Assigments/Assignment5')


test('Check wether object to array converted',()=>{
      expect(objToArray({"a":1}).join(',')).toMatch('a,1')
})

test('check whether object is not get converted into array fails',()=>{
    expect(objToArray({"a":1}).join(',')).not.toMatch('a 1')
})


test('check whether if we pass empty object empty array should get return',()=>{
    expect(objToArray({}).length).toBe(0)
})
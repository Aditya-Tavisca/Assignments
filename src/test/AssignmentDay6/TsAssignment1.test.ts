import{sumOfArrayTraditionalLogic,sumOfArrayBuiltIn} from "../../main/Day5Assignments/TsAssignment1"

test("test sum of arrayfunction in traditional way will retrun perfect value",()=>{
    expect(sumOfArrayTraditionalLogic).toBe(21);
})

test("test sum of arrayfunction in traditional way will not retrun perfect value",()=>{
    expect(sumOfArrayTraditionalLogic).not.toBe(19);
})

test("test sum of arrayfunction using built in function will retrun perfect value",()=>{
    expect(sumOfArrayBuiltIn).toBe(21);
})

test("test sum of arrayfunction using built in function will not retrun perfect value",()=>{
    expect(sumOfArrayBuiltIn).not.toBe(19);
})
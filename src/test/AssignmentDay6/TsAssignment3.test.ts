import{Pallindrome} from "../../main/Day5Assignments/TsAssignment3"

var pallindrome:any;

beforeAll(()=>{
    pallindrome=new Pallindrome();
})

afterAll(()=>{
    pallindrome=null;
})

test('Test the pallindrome with logic with valid string',()=>{
    expect(pallindrome.checkPalindromeWithLogic('madam')).toBe(true);
})


test('Test the pallindrome with logic with invalid string',()=>{
    expect(pallindrome.checkPalindromeWithLogic('madai')).toBe(false);
})


test('Test the pallindrome with inbuilt function and valid string',()=>{
    expect(pallindrome.checkPalindromeUsingInbuiltFunction('madam')).toBe(true);
})


test('Test the pallindrome with inbuilt function and invalid string',()=>{
    expect(pallindrome.checkPalindromeUsingInbuiltFunction('madai')).toBe(false);
})
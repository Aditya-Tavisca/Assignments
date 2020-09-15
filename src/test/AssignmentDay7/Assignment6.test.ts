import {ArrayComparison} from '../../main/Day2Assigments/arrayComparison'
var arrayComparison:any;

beforeAll(()=>{
    arrayComparison=new ArrayComparison();
})

test('Test whether B is Sub Set of A',()=>{
    expect(arrayComparison.arrayComparisonLogic([1, 2, 3, 4, 5],[1, 2, 3])).toBe('B is Subset of A');
})


test('Test whether A is Sub Set of B',()=>{
    expect(arrayComparison.arrayComparisonLogic([1, 2, 3],[1, 2, 3,5,6])).toBe('A is Subset of B');
})

test('Test whether A equal to B',()=>{
    expect(arrayComparison.arrayComparisonLogic([1, 2, 3],[1, 2, 3])).toBe('A and B are Equal');
})


test('Test whether A is not equal to B',()=>{
    expect(arrayComparison.arrayComparisonLogic([1, 2, 3],[1, 2,4.9])).toBe('A and B are not equal');
})
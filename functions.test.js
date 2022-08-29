let myFunctions = require('./functions');

test('check to see if returnTwo function works', () => {
    expect(2).toEqual(2)
})

test('check to see if greeting function works', () => {
    let jamesGreeting = myFunctions.greeting('James');
    let jillGreeting = myFunctions.greeting('Jill');

    expect(jamesGreeting).toBe('Hello, James');
    expect(jillGreeting).toBe('Hello, Jill')
})

test('check to see if add function is working', () => {
    let firstCheck = myFunctions.add(1, 2);
    let secondCheck = myFunctions.add(5, 9)

    expect(firstCheck).toEqual(3);
    expect(secondCheck).toEqual(14);
})

describe('Math functions test', () => {
    test('check to see if multiply is working', () => {
        let firstTest = myFunctions.multiply(5, 3);

        expect(firstTest).toEqual(15)
    })
    test('check to see if subtract is working', () => {
        let subtractTest = myFunctions.subtract(10, 7);

        expect(subtractTest).toEqual(3)
    })
    test('check to see if divide is working', () => {
        let divideTest = myFunctions.divide(15, 3);

        expect(divideTest).toEqual(5)
    })
})
import { addString } from "./utils/addString";

describe('String Calculator',()=>{

    test('should return 0 for an empty string', () => {
        expect(addString("")).toBe(0);
    });

    test('should return same number for a single string if they are a number', () => {
        expect(addString("6")).toBe(6);
    });

    test('should return sum of numbers for multiple string if they are a number', () => {
        expect(addString("1,5")).toBe(6);
    });

    test('should return sum of numbers for multiple string if they are a number', () => {
        expect(addString("1,2,3,4")).toBe(10);
    });
})
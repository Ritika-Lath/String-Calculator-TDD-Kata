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

    test('should return sum of numbers even if any special character is added', () => {
        expect(addString("//;\n2;3;4")).toBe(9);
    });

    test('should return 0 if only blank spaces are there', () => {
        expect(addString("         ")).toBe(0);
    });

    test('should return sum if any number is input within ""', () => {
        expect(addString(` "2" `)).toBe(2);
    });

    test('should return sum if any +ve or -ve number is input', () => {
        expect(addString("1,-2,3,-4")).toBe(-2);
    });
})
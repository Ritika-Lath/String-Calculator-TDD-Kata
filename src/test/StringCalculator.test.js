import { addString } from "../utils/addString";

describe('String Calculator', () => {

    test('should return 0 for an empty string', () => {
        expect(addString("")).toBe(0);
    });

    test('should return the same number for a single string if it is a number', () => {
        expect(addString("6")).toBe(6);
    });

    test('should return sum of numbers for multiple strings if they are numbers', () => {
        expect(addString("1\n1,3")).toBe(5);
    });

    test('should return sum of numbers even if any alphabets are added', () => {
        expect(addString("1,qrt,5,3")).toBe(9);
    });

    test('should return sum of numbers even if any special characters are added', () => {
        expect(addString("//;\n1;2")).toBe(3);
    });

    test('should return 0 if only blank spaces are there', () => {
        expect(addString("         ")).toBe(0);
    });

    test('should return sum if any number is input within ""', () => {
        expect(addString(` "2" `)).toBe(2);
    });

    test('should throw an error for negative numbers and list them', () => {
        expect(() => addString("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
    });

    test('should throw an error for multiple negative numbers and list them', () => {
        expect(() => addString("1,-2,-3,-4")).toThrow("Negative numbers not allowed: -2, -3, -4");
    });

  
});

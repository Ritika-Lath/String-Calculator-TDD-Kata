import { addString } from "./utils/addString";

describe('String Calculator',()=>{

    test('should return 0 for an empty string', () => {
        expect(addString("")).toBe(0);
    });

    test('should return same number for a single string', () => {
        expect(addString("6")).toBe(6);
    });
})
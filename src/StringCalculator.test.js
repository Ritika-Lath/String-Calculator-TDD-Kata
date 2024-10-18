import { addString } from "./utils/addString";

describe('String Calculator',()=>{

    test('should return 0 for an empty string', () => {
        expect(addString("")).toBe(0);
      });
})
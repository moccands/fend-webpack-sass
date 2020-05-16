const getTest = require('./getTest');

//import { getTest } from "../src/client/js/formHandler";

describe('getTest', () => {
    test("function defined", () => {
        expect(getTest()).toBe('this is a message');
    });
});


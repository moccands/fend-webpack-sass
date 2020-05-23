import "@babel/polyfill"
import { checkForName } from "./nameChecker";
import { getValueFromForm } from "./formHandler";

test("check For Name", () => {
        expect(checkForName("Good")).toBe(true);
});


test("check wiht number  ", () => {
        expect(checkForName("123")).toBe(false);
});

test("check wiht number  ", () => {
        document.body.innerHTML = '<input id="name" value="text called">'
        expect(getValueFromForm()).toBe("text called");
});

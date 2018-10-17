import { greet } from "./greet";

describe('greet', () => {
    it('should include name in the output', ()=> {
       expect(greet("juhi")).toContain("Welcome juhi");
    });
});
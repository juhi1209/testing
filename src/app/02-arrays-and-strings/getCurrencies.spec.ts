import { getCurrencies } from "./getCurrencies";

describe('getcurrencies', () => {
    it("should return supported currencies", () => {
        expect(getCurrencies()).toContain('USD');
        expect(getCurrencies()).toContain('AUD');
        expect(getCurrencies()).toContain('EUR');        
    });
});
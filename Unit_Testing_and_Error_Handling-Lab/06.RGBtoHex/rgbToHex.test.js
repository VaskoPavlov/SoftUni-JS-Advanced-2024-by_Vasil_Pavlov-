import { rgbToHexColor } from "./rgbToHex.js";

describe ('rgb to hex color conversion', function () {
    it('returns true of the max value (255)', ()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });
    it('no input', ()=>{
        expect(rgbToHexColor()).to.be.undefined;
    });
    it('returns true of the min value (0)', ()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
    it('returns false because first value is invalid', ()=>{
        expect(rgbToHexColor(300,0,0)).to.be.undefined
    });
    it('returns false because second value is invalid', ()=>{
        expect(rgbToHexColor(0,-1,0)).to.be.undefined
    });
    it('returns false because third value is invalid', ()=>{
        expect(rgbToHexColor(0,0,-1)).to.be.undefined
    });
    it("should return #100C0D for (16, 12, 13)", function () {
        expect(rgbToHexColor(16, 12, 13)).to.equal("#100C0D");
    })
});
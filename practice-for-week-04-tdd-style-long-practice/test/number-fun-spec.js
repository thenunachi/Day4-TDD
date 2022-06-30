const {expect} = require("chai");
const  {returnsThree,reciprocal} = require("../problems/number-fun")

describe("returnsThree function",function(){
    it("should return number three",function (){
expect(returnsThree(3)).to.equal(3)
    })
})
describe("reciprocal function",function(){
    it("should return reciprocal",function(){
        expect (reciprocal(532)).to.equal(1/532);
        expect (reciprocal(3)).to.equal(1/3)
    })
})
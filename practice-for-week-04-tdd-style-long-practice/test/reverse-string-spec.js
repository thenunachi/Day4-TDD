// Your code here
const { expect } = require("chai")
const reverseString = require("../problems/reverse-string")

describe("reverseString function", function () {
    it("should reverse string successfully", function () {
        const string = "fun"
        expect(reverseString(string)).to.equal("nuf")
    })
})

const { expect } = require("chai")
const myMap = require("../problems/my-map")

describe("myMap function", function () {
    it("should return new array", function () {
        expect(myMap(cb([1, 2, 3]))).to.equal([2, 4, 6])
    })
})

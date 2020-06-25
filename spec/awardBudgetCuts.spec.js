const { expect } = require("chai");
const {findGrantsCap} = require("../awardBudgetCuts")

describe("findGrantsCap", () => {
    describe("Provided function tests", () => {
        it("Test 1", () => {
            const test1 = findGrantsCap([2,4],3);
            expect(test1).to.equal(1.5);
        })
        it("Test 2", () => {
            const test1 = findGrantsCap([2,4, 6],3);
            expect(test1).to.equal(1);
        })
        it("Test 3", () => {
            const test1 = findGrantsCap([2,100,50,120,167],400);
            expect(test1).to.equal(128);
        })
        it("Test 4", () => {
            const test1 = findGrantsCap([2,100,50,120,1000],190);
            expect(test1).to.equal(47);
        })
    })
})
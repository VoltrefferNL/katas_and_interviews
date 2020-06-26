const { expect } = require("chai");
const { calcDroneMinEnergy } = require("../droneFlightPlanner")

describe.only("calcDroneMinEnergy", () => {
    describe("Provided function tests", () => {
        it("Test 1", () => {
            const test1 = calcDroneMinEnergy([[0,1,19]])
            expect(test1).to.equal(0);
        })
        it("Test 2", () => {
            const test1 = calcDroneMinEnergy([[0,2,10],[10,10,8]]);
            expect(test1).to.equal(0);
        })
        it("Test 3", () => {
            const test1 = calcDroneMinEnergy(
                [[0,2,6],[10,10,20]]);
            expect(test1).to.equal(14);
        })
        it("Test 4", () => {
            const test1 = calcDroneMinEnergy([[0,2,10],[3,5,0],[9,20,6],[10,12,15],[10,10,8]]);
            expect(test1).to.equal(5);
        })
    })
})
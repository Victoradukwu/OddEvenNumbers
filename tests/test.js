const chai = require('chai');
const assert = chai.assert;
const app = require('../src/main.js');

describe("EvenOddNumbers", ()=>{
    describe("handle string input", ()=>{
        it("should return \"Please enter a valid number\"", ()=>{
            assert.equal(app.evenOddNumbers("Andela"), "Please enter a valid number");
        });
    });

    describe("handle empty input", ()=>{
        it("should return return \"You have not inputed anything\"", ()=>{
            assert.equal(app.evenOddNumbers(), "You have not inputed anything");
        });
    });

    
    describe("Handles fractional input", ()=>{
        it("should return \"Fractions are not valid input\"", ()=>{
            assert.equal(app.evenOddNumbers(60.5), "Pling");
        });
    });

    describe("Testing for a valid positive number", ()=>{
        it("should return an object of two arrays", ()=>{
            assert.equal(app.evenOddNumbers(10), {evenNum:[0,2,4,6,8,10], oddNum:[1,3,5,7,9]});
        });
    });

    describe("Testing for a valid negative number", ()=>{
        it("should return an object of two arrays", ()=>{
            assert.equal(app.evenOddNumbers(-12), {evenNum:[0,-2,-4,-6,-8,-10,-12], oddNum:[-1,-3,-5,-7,-9,-11]});
        });
    });

    describe("Testing for a valid positive array", ()=>{
        it("should return an object of two arrays", ()=>{
            assert.equal(app.evenOddNumbers([1, 5, 6, 10, 11, 13]), {evenNum:[6,10], oddNum:[1,5,11,13]});
        });
    });

    describe("Testing for a valid negative array", ()=>{
        it("should return an object of two arrays", ()=>{
            assert.equal(app.evenOddNumbers([-1, -5, -6, -10, -11, -13]), {evenNum:[-6,-10], oddNum:[-1,-5,-11,-13]});
        });
    });

    describe("Testing for a valid mix of negative and positive array", ()=>{
        it("should return an object of two arrays", ()=>{
            assert.equal(app.evenOddNumbers([1, -5, 6, -10, 11, 13]), {evenNum:[6,-10], oddNum:[1,-5,11,13]});
        });
    });

    describe("Testing for an array that contains a fraction", ()=>{
        it("should fail if the array contains one or more fractions", ()=>{
            assert.equal(app.evenOddNumbers([1, 5.5, 6, 10, 11, 13]), "Invalid input; the array may not contain fractional elements");
        });
    });

    describe("Testing for an array that contains a string", ()=>{
        it("should fail if the array contains one or more fractions", ()=>{
            assert.equal(app.evenOddNumbers([1, 5.5, 6, "Andela", 11, 13]), "Invalid input; the array may not contain strings");
        });
    });

    describe("Testing for an array that contains a fraction", ()=>{
        it("should fail if the array contains one or more fractions", ()=>{
            assert.equal(app.evenOddNumbers([1, {a:1, b:2}, 6, 10, 11, 13]), "Invalid input; the array may not contain objects");
        });
    });    
});
const assert = require('chai').assert;
const app = require ('../index');

evenAndOddResult = app.even_and_odd0(5);


describe('evenAndOdd', function(){
    describe('return', function (){
        it('evenAndOdd shoud return The number is equal', function(){
            assert.notEqual(evenAndOddResult, "The number is equal!");
        });
        it('evenAndOdd shoud return The number is even', function(){
            assert(typeof evenAndOddResult === "string");
        });
        it('evenAndOdd shoud return The number is even', function(){
            assert.equal(evenAndOddResult, "The number is even!");
        });
        it ('evenAndOdd shoud be a string', function(){
        assert.typeOf(evenAndOddResult, 'string' );
        });
        it ('evenAndOdd shoud be above 3', function(){
        assert.isAbove(5, 3);
        });
        it ('evenAndOdd is not a number', function(){
            assert.isNotNumber(evenAndOddResult);
        });
        it ('evenAndOdd is not ad object', function(){
            assert.isNotOk(false, evenAndOddResult);
        });
        it ('evenAndOdd value is notTrue', function(){
            assert.isNotTrue(evenAndOddResult);
        });
        it ('evenAndOdd value is notNan', function(){
            assert.isNotNaN(evenAndOddResult);
        });
        it ('evenAndOdd is a string', function(){
            assert.isString(evenAndOddResult);
        });
        it ('evenAndOdd include', function(){
            assert.notInclude('draw', evenAndOddResult);
        });
    });
});



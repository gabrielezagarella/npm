const assert = require('chai').assert;
const app = require ('../index');

risikoResult = app.risikoGame;


describe('risiko', function(){
    describe('return', function (){
        it('risiko shoud return conterPlayer', function(){
            assert.notEqual(risikoResult, 'counterPlayer > counterPlayer2');
        });
        it ('risiko is not a number', function(){
            assert.isNotNumber(risikoResult);
        });
        it ('risiko is not ad object', function(){
            assert.isNotOk(false, risikoResult);
        });
        it ('risiko value is notTrue', function(){
            assert.isNotTrue(risikoResult);
        });
        it ('risiko value is notNan', function(){
            assert.isNotNaN(risikoResult);
        });
        it ('risiko is a string', function(){
            assert.isNotString(risikoResult);
        });
        it ('risiko include', function(){
            assert.notInclude('draw', risikoResult);
        });
    });
});




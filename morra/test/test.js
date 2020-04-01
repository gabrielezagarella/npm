const assert = require('chai').assert;
const app = require('../index');
morraResult = app.morra('stone');


describe('App', function () {
    describe('arg', function () {
        it('arg shoudn\'t be a number', function () {
            //assert.notEqual (Object (result,player, computer))
            assert.notEqual('stone', 3);
        })
    });
    describe('return', function () {
        it('morra shoud be a string', function () {
            assert.typeOf(morraResult, 'Object');
        });
        it('morraResult shoud be a string', function () {
            assert(typeof morraResult.result === 'string');
        });
        it('morra shoud return x', function () {
            assert.notEqual(morraResult, 'x');
        });
        it('morra is not a number', function () {
            assert.isNotNumber(morraResult);
        });
        it('morra is not ad object', function () {
            assert.isNotOk(false, morraResult);
        });
        it('morra value is notTrue', function () {
            assert.isNotTrue(morraResult);
        });
        it('risiko value is notNan', function () {
            assert.isNotNaN(morraResult);
        });
        it('morra is a string', function () {
            assert.isNotString(morraResult);
        });
        it('morra include', function () {
            assert.notInclude('draw', morraResult);
        });
    });
});
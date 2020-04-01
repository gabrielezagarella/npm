var request = require('supertest');
var assert = require('assert');
var app = require('./index');

describe('test', function () {
    it('/:value', function (done) {
        request(app)
            .get('/:value')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                assert(res.body, mymodule.morra(choice));
                done();
            });
    });
});
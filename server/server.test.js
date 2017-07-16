/**
 * Created by csche on 14.07.2017.
 */

const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {

    describe('GET /', () => {
        it('should return hello world response', (done) => {
            // mit request supertest is called, use .get for the route
            request(app)
            // a method like get, post, put, delete (REST) to test the route
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        // assert 200
        // my user object exists in users array
        it('should assert status 200 & check if my user exists in response', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Chris',
                        age: 41
                    });
                })
                .end(done);
        });
    });

});





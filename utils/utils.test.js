/**
 * Created by csche on 13.07.2017.
 */

const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it("should add two numbers", () => {
            let res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
            // instead use above with expect assertion library
            // if (res !== 44){
            //         throw new Error(`Expected 44, but the result was ${res}.`)
            // }
        });

        // testing async functions, we expct a sum to come back, so we compare this
        // we have to insert done as an argument and end the cycle with done();
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4,3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it("should square a number", () => {
            let res = utils.square(3);

            expect(res).toBe(9).toBeA('number');
            // instead use above with expect assertion library
            // if (res !== 9){
            //     throw new Error(`Expected 9, but the result was ${res}.`)
            // }
        });

        // should verify first and last names are set
        // assert users object includes firstname and lastname with proper values

        it('should async square a number', (done) => {
            utils.asyncSquare(4, (res) => {
                expect(res).toBe(16).toBeA('number');
                done();
            });
        });
    });

});

it('should set firstName and lastName', () => {
    let user = {
        age: 41,
        location: 'Ulm'
    };
    let res = utils.setName(user, 'Christian Scheidler');

    expect(res).toBeA('object').toInclude({
        firstName: 'Christian',
        lastName: 'Scheidler'
    });
    // expect(res).toBeA('object');
    // expect(res.firstName).toBeA('string');
    // expect(res.lastName).toBeA('string', 'the first or lastname is missing');
});


// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'chris'}).toNotEqual({name: 'Chris'});
//     // expect([2,3,4]).toInclude(3);
//     expect({
//         name: 'Chris',
//         age: 41,
//         location: 'Ulm'
//     }).toExclude({
//         age: 25
//     })
// });


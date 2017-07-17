const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {

        // with rewire we get the and check the appjs/db, but before
    // we have to make a variable for db with a spy, that we can replace with the
    // one in app.js
        let db = {
            saveUser: expect.createSpy()
        };
        // we insert our spy db into app.js for testing
        app.__set__('db', db);

        it('should call the spy correctly', () => {
            // create a spy
            let spy = expect.createSpy();
            // call the spy and arguments that should be tested
            spy('Chris', 41);
            expect(spy).toHaveBeenCalledWith('Chris', 41);
        });

        // we check if checkUser runs with our 'rewired' spy
        it('should call saveUser with user object', () => {
            let email = 'chris@email.com';
            let password = '123xyz';

            app.handleSignup(email, password);
            expect(db.saveUser).toHaveBeenCalledWith({email, password});

        });

});

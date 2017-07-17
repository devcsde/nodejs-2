/**
 * Created by csche on 17.07.2017.
 */

let db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // check if email already exists
    // send the user to the db
    db.saveUser({email, password});
    // send welcome email

};
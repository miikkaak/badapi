let user_db = require("./db.json");
const files = require('fs');
const res = require("express/lib/response");

//generate random 'sms codes'
exports.generateCodes = (req, res) => {
    let c = [];
    for (const user in user_db.users) {
        let rnd = Math.floor(Math.random() * 10000);
        user_db.users[user].smscode = String(rnd).padStart(4, '0');
        c.push(user_db.users[user].smscode);
    }
    res.json(JSON.stringify(c));
}


exports.code = (req, res) => {
    if (req.body !== null) {
        if (user_db.users.hasOwnProperty(req.body.id)) {
            valid = user_db.users[req.body.id].smscode;

            if (valid == req.body.smscode) {
                res.send('200 Your SMS code was valid');
            }
            else {
                res.send('200 SMS code was invalid');
            }
        } else {
            res.json(JSON.stringify('404 validation failed'));
        }

    }
}


var db = require('./database'); //nhúng model database vào đế kết nối db

exports.checkEmail = (email) => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = `SELECT * FROM user WHERE email = '${email}'`;
        db.query(sql, (err, d) => {
            console.log('List success');
            data = d[0];
            hamOK(data);
        })
        }
    )
}

exports.checkPassword = (password) => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = `SELECT * FROM user WHERE password = '${password}'`;
        db.query(sql, (err, d) => {
            console.log('List success');
            data = d[0];
            hamOK(data);
        })
        }
    )
}


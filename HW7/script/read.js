const fs = require('fs');
const read = (name, cb) =>
    fs.readFile(name, (err, data) => {
        if (err) return console.log(err);
        cb(data.toString('utf8'));
    });

module.exports = read;
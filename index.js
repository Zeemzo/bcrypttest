var bcrypt = require('bcrypt');
bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash('1234', salt, function (err, hash) {
        console.log(hash)
    });
});
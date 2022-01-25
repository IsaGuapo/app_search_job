const jwt = require('jsonwebtoken'); //import jwt from 'jsonwebtoken'; 

const getEmailByToken = (token) => {
    let email = '';
    if (token) {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        email = data.email;
    }
    return email;
};

module.exports = getEmailByToken;
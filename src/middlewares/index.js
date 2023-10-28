const verifyEmail = require('./verifyEmail');
const verifyEmailLogin = require('./verifyEmailLogin');
const verifyFields = require('./verifyFields');
const verifyEmailFormat = require('./verifyEmailFormat');
const verifyPasswordLogin = require("./verifyPasswordLogin");
const verifyToken = require('./verifyToken');



module.exports = {
  verifyEmail,
  verifyEmailLogin,
  verifyFields,
  verifyEmailFormat,
  verifyPasswordLogin,
  verifyToken
}


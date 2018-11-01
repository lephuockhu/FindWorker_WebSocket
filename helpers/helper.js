var jwt = require('jsonwebtoken');

var db = require('../databases/createPool').connection;

//decode với key trong config
function jwtVerifyLogin(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.FW_SECRET, function (err, decoded) {
            if (err) return reject(err);
            resolve(decoded);
        });
    })
};

//RETURN JSON
function jsonError(strErr) {
    return {
        "error": strErr
    };
};
function jsonErrorDescription(strErr) {
    return {
        "error": "invalid_grant",
        "error_description": strErr
    };
};
function jsonSuccessFalse(strMessage) {
    return {
        "success": false,
        "message": strMessage
    };
};
function jsonSuccessTrue(strMessage) {
    return {
        "success": true,
        "message": strMessage
    };
};
function jsonSuccessTrueResult(strMessage) {
    return {
        "success": true,
        "result": strMessage
    };
};

module.exports = { jwtVerifyLogin, jsonErrorDescription, jsonSuccessFalse, jsonSuccessTrue, jsonSuccessTrueResult, jsonError };
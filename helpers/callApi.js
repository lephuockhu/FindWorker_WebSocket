var request = require('request');

var header = { 'Content-Type': 'application/json; charset=utf-8' };

function POST(controller, data, access_token) {
    data = JSON.stringify(data);
    header['Authorization'] = access_token;
    request({
        method: 'POST',
        headers: header,
        uri: controller,
        body: data
    }, function (err, response, body) {
        console.log(`status: ${response.statusCode}, data: + ${body}`);
    });
};

function PUT(controller, data, access_token) {
    data = JSON.stringify(data);
    header['Authorization'] = access_token;
    request({
        method: 'PUT',
        headers: header,
        uri: controller,
        body: data
    }, function (error, response, body) {
        console.log(`status: ${response.statusCode}, data: + ${body}`);
    });
};

module.exports = { POST, PUT }
// var localhost = "http://18.217.245.123";
var localhost = "http://localhost:3000";
var service = {
    "ACCOUNT": {
        "UPDATE_SOCKET_ID": localhost + "/api/chat/update-socketid"
    },
    "CHAT": {
        "NEW_MESSAGE": localhost + "/api/chat/post-new-message"
    }
};

module.exports = service;
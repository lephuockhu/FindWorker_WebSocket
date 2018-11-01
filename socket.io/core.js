const io = require("socket.io");

const callApi = require('../helpers/callApi');
const seed = require('../helpers/seed');

module.exports = function (http) {
    io(http).on("connection", (socket) => {
        var token = "";
        console.log("Co nguoi ket noi server: " + socket.id);
        let objectValue = {
            SocketID: socket.id
        };
        //EMIT

        //ON
        //Listen access token from client
        socket.on('authorization', function (result) {
            token = result;
            callApi.PUT(seed.ACCOUNT.UPDATE_SOCKET_ID, objectValue, token);
        });
        //Destroy SOCKETID use Token
        socket.on('disconnect', function () {
            //Destroy SocketID
            objectValue.SocketID = 0;
            callApi.PUT(seed.ACCOUNT.UPDATE_SOCKET_ID, objectValue, token);
        });
        //Send new message in room
        socket.on('send_message', function (result) {
            socket.broadcast.to(result.HistoryID + "").emit('get_message', result);
            callApi.POST(seed.CHAT.NEW_MESSAGE, result, token);
        });
        //Nhận list room và join
        socket.on('array_room', function (result) {
            console.log("array_room:" + result);
            result.map(function (value) {
                socket.join(value + "");
            });
        });
    });
};
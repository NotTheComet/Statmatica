import { fstat } from "fs";
import { io } from "socket.io-client";
import {settings} from "./settings";

const conf = new settings();
var ClientKey = conf.ClientKey

var Clientid;

const socket = io("https://" + conf.serverip);


io.on('connection', (socket) => {

    console.log("connected Sending response");
    
    socket.id = Clientid;
    io.emit('ClientInfo', {ClientKey: "${ClientKey}", clientName: ""});
    
});

io.on("ping", (data) => {
    io.emit("pong", "");
}); 


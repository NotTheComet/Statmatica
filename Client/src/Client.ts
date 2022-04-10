import { io } from "socket.io-client";
import {settings} from "./settings";

const conf = new settings();

var Clientid;

const socket = io("https://" + conf.serverip);

io.on('connection', (socket) => {

    socket.id = Clientid

    io.emit('ClientInfo', {})
});




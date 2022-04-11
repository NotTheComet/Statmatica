import { io } from "socket.io";



function Stats() {

    var count = io.engine.clientsCount;
    var uptime = process.uptime();
    
    var obj = {"clients": "${count}", "uptime": "${uptime}"};

    return obj;
}

export class router {
    constructor() {
        
    }

    getWebClientKey() {
        
    }
}
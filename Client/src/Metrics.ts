import os from "os";

function bytestoint(bytes: number) {
    var resultmb;
    var resultgb;
    
    resultmb = bytes / 125000;
    resultgb = resultmb / 1000;
    
    var obj = JSON.parse('{"mb":"$resultmb", "gb":"$resultgb"}');
    return obj;
}


class Metrics {
    private OStype: string;
    private OSuptime: number;
    private OScpus: Object;

    public constructor() {
        this.OStype = os.type();
        this.OScpus = os.cpus();
        this.OSuptime = os.uptime();

    }

  

    public getOStype(): string {
        return this.OStype;
    }

    public getOScpus(): object {
        return this.OScpus;
    }

    public getOSuptime(): number {
        return this.OSuptime;
    }
}

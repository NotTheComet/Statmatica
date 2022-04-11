import fs from 'fs';
import path from 'path';


export class settings {
    protected FileData: string;
    protected Dataphrase: JSON;

    public serverip: string;
    public ClientKey: string;
    public ClientName: string;
    //public
    //public
    //public
    //public
    //public
    //public

    public constructor() {
        var filepath = path.format({ dir: '../', base: 'settings.json' });
        this.FileData = filepath;

        fs.readFile(filepath, (err, data) => {
            if (err) {
                console.error('[ERROR]' + err);
                return err;
            }

            var dataPhrase = JSON.parse(data.toString());
            this.Dataphrase = dataPhrase;
        });
    }

    public getServerip() {
        const serverCredentials = JSON.parse(this.Dataphrase.servercred);
        var ip = serverCredentials.ip;
        var port = serverCredentials.port;

        return ip;
    }
}


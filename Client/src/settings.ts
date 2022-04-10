import fs from 'fs';
import path from 'path';


export class settings {
    protected FileData: JSON;

    public serverip: string;
    public ClientKey: string;
    //public
    //public
    //public
    //public
    //public
    //public
    //public

    public constructor() {
        var filepath = path.format({dir: '../',base: 'settings.json'});

        fs.readFile(filepath, (err, info) => {
            if (err) {
                console.error('[ERROR]' + err);
                return
              }
        
            var dataPhrase = JSON.parse(info);
            
        });
    }

    public getServerip() {
        
    }
}


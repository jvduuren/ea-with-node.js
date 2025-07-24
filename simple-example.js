const config = require('./config.js');
const winax = require('winax');
const fs = require('fs');

const EA_DB_FILE = config.EA_DB_FILE;
let isEAFileOpen = false;

console.log(`Opening Enterprise Architect (in background) ...`);
const ea = new ActiveXObject('EA.Repository');
try {
    if (fs.existsSync(EA_DB_FILE)) {
        console.log(`Opening EA database ${EA_DB_FILE} ...`);
        isEAFileOpen = ea.OpenFile(EA_DB_FILE);
        if (isEAFileOpen === true) {
            // get root package and display some properties
            const rootPkg = ea.GetPackageByID(2);
            if (rootPkg) {
                console.log(`=======================================================`);
                console.log(`package name : ${rootPkg.Name}`);
                console.log(`package notes: ${rootPkg.Notes}`);
                console.log(`package GUID : ${rootPkg.PackageGUID}`);
                console.log(`creation date: ${rootPkg.Created}`);
                console.log(`author       : ${rootPkg.Element.Author}`);
                console.log(`stereotype   : ${rootPkg.Element.Stereotype}`);
                console.log(`=======================================================`);
            }
        }
        else {
            throw new Error(`Failed to open EA file!`);
        }
    }
    else {
        throw new Error(`EA database file not found! -> ${EA_DB_FILE}`);
    }
}
catch (err) {
    console.log(`[ERROR] ${err.message}`);
}
finally {
    if (isEAFileOpen === true) {
        console.log(`Closing EA database ...`);
        ea.CloseFile();
    }
    console.log(`Exiting Enterprise Architect ...`);
    ea.Exit();
}
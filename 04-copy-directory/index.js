const fs = require('fs');
const path = require('path');

const oldDir = path.join(__dirname, 'files');


fs.readdir(oldDir, { withFileTypes: true }, (err, files) => {
    if (err) {
        throw err;
    }
    fs.mkdir("04-copy-directory/files-copy", { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    });
    const newDir = path.join(__dirname, 'files-copy');
    files.forEach((el) => {
        fs.readFile(`${oldDir}/${el.name}`, (err, data) => {
            if (err) {
                throw err;
            } else {
                fs.writeFile(`${newDir}/${el.name}`, data, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            }
        });
    });
});

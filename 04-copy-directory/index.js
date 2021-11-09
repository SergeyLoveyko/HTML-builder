const fs = require('fs');
const path = require('path');

const oldDir = path.join(__dirname, 'files');
const newDir = path.join(__dirname, 'files-copy');

fs.mkdir(newDir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
});

fs.readdir(newDir, (err, files) => {
    if (err) {
        throw err;
    }
    
    files.forEach(file => {
        fs.unlink(path.join(__dirname, 'files-copy', file), (err) => {
            if (err) {
                throw err;
            }       
        });
    });
    fs.readdir(oldDir, (err, files) => {
        if (err) {
            throw err;
        }
        files.forEach(file => {
            fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), (err) => {
                if (err) {
                    throw err;
                }
            });
        });
    });
});
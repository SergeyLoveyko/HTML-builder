const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, "secret-folder");
fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        const fileDir = path.join(__dirname, 'secret-folder', file);
        fs.stat(fileDir, (err, stats) => {
            if (err) throw err;
            if (stats.isFile()) {
                const name = path.parse(fileDir).name;
                const ext = path.parse(fileDir).ext.slice(1);
                const size = stats.size;
                console.log(`${name} - ${ext} - ${size}b`);
            }
        });
    });
});



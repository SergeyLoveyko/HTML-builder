const fs = require('fs');
const path = require('path');
const readline = require('readline');

console.log("Добрый день!\nДавайте знакомится )\nМеня звать Сергей.\nА как ваше имя ?");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// Запись в файл
fs.writeFile(path.join(__dirname, "text.txt"), "", (err) => {
    if (err) {
        throw err;
    }
});


rl.on('line', (line) => {
    if (line == "exit") {
        console.log("\nВсего хорошего!\nДо встречи )");
        process.exit();
    }

    fs.appendFile(path.join(__dirname, "text.txt"), `${line}\n`, (err) => {
        if (err) {
            throw err;
        }
    });
});

rl.addListener('SIGINT', () => {
    // console.log('Ctrl + C');
    console.log("\nВсего хорошего!\nДо встречи )");
    process.exit();
});

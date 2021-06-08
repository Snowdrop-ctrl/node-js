// loading file system module and using asynchronours (non blocking )
const { readFile, writeFile } = require('fs');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
    }
    const first = result;
    console.log(first);
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const second = result;
        console.log(second);
        writeFile(
            './content/result-async.txt',
            `use the asynchronous writefile function ${second}`, { flag: 'a' },
            () => {
                console.log('completed....');
            })

    })
})
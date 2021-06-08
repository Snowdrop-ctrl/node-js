// loading file system module and using synchronours ( blocking )
const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result_file.txt', 'using writefilesync function to show this string', { flag: 'a' });
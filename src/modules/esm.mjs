// You should refactor file (you can add additional imports if needed)
// cjsToEsm.cjs - rewrite it to it's equivalent in ECMAScript notation (and rename it to esm.mjs)


import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';


import { createRequire } from "module"


const require = createRequire(import.meta.url);
const fileA = require('./files/a.json')
const fileB = require('./files/b.json')
// require('./files/c');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = fileA;
} else {
    unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${path.basename}`);
console.log(`Path to current directory is ${path.dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};


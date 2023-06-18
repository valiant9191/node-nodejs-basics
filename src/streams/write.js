import path from 'path'
import { createWriteStream } from 'fs';
import { createInterface } from 'readline';

const write = async () => {
    const absolutePath = path.dirname(process.argv[1])
    const pathToFile = `${absolutePath}/files/fileToWrite.txt`

    const stream = createWriteStream(pathToFile, 'utf-8')
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    readline.on('line', (data) => { stream.write(data) })
};

await write();
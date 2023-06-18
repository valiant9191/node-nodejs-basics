import path from 'path'
import { createReadStream } from 'fs';

const read = async () => {
    const absolutePath = path.dirname(process.argv[1])
    const pathToFile = `${absolutePath}/files/fileToRead.txt`
    const stream = createReadStream(pathToFile, 'utf-8')
    // stream.on('open', () => process.stdout.write('start reading file \n'))
    stream.on('data', (data) => process.stdout.write(data))
    // stream.on('end', () => process.stdout.write('\nend of reading'))
};

await read();
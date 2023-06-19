import path from 'path';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'node:stream';

const compress = async () => {
    const absolutePath = path.dirname(process.argv[1])
    const pathToFile = `${absolutePath}/files/fileToCompress.txt`
    const outputPath = `${absolutePath}/files/archive.gz`

    try {
        const gzip = createGzip();
        const source = createReadStream(pathToFile);
        const destination = createWriteStream(outputPath);
        pipeline(source, gzip, destination, (err) => {
            if (err) { console.log(err) } else {
                console.log('success')
            }
        });
    } catch (err) {
        console.error('An error occurred:', err);
    }
};

await compress();
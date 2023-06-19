import path from 'path';
import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'node:stream';

const decompress = async () => {
    const absolutePath = path.dirname(process.argv[1])
    const filePath = `${absolutePath}/files/archive.gz`
    const outputPath = `${absolutePath}/files/fileToCompress.txt`

    try {
        const gzip = createUnzip();
        const source = createReadStream(filePath);
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

await decompress();
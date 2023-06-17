import { readFile } from 'fs/promises';
import path from 'path'

const read = async () => {
    const absolutePath = path.dirname(process.argv[1])
    const filePath = `${absolutePath}/files/fileToRead.txt`
    const errorMessage = 'FS operation failed'

    try {
        await readFile(filePath, { encoding: 'utf8' })
            .then((data) => {
                console.log(data)
            })
    } catch (err) {
        console.error(errorMessage)
    }
};

await read();
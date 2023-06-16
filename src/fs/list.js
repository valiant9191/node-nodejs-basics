import { readdir } from 'fs/promises';
import path from 'path'

const list = async () => {
    const pathAbsolute = path.dirname(process.argv[1])
    const filesFolder = `${pathAbsolute}/files`
    const errorMessage = 'FS operation failed'

    try {
        const files = await readdir(filesFolder)
        console.log(files)

    } catch (err) {
        console.error(errorMessage)
    }
};

await list();
import { mkdir, access, readdir, cp } from 'fs/promises';
import { basename, dirname } from 'path';

const copy = async () => {
    const pathAbsolute = process.argv[1];
    const pathOriginal = dirname(pathAbsolute) + '/files'
    const pathDestinationCopy = dirname(pathAbsolute) + '/files_copy'
    const errorMessage = 'FS operation failed'

    try {
        // check folder with files exists 
        await access(pathOriginal)
        // create destination folder 
        await mkdir(pathDestinationCopy)
        // copy files in folder & check if folder exists
        cp(pathOriginal, pathDestinationCopy, { recursive: true })
            .then(() => console.log('successfully copied'))
    } catch (error) {
        console.error(errorMessage + '  ' + error.message)
    }
};

await copy();

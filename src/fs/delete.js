import { rm } from 'fs/promises';
import path from 'path';


const remove = async () => {
    const pathAbsolute = path.dirname(process.argv[1])
    const errorMessage = 'FS operation failed'
    const fileToDelete = `${pathAbsolute}/files/fileToRemove.txt`

    try {
        await rm(fileToDelete)
            .then(() => console.log('successfully removed'))
    } catch (error) {
        console.error(errorMessage)
    }
};

await remove();
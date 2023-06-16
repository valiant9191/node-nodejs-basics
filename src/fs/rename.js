import { access, rename as renameFS } from 'fs/promises';
import path from 'path';



const rename = async () => {
    const pathAbsolute = path.dirname(process.argv[1])
    const fileToRename = `${pathAbsolute}/files/wrongFilename.txt`
    const newFileName = `${pathAbsolute}/files/properFilename.md`
    const errorMessage = 'FS operation failed'

    try {
        let fileExists = await access(newFileName)
            .then(() => true)
            .catch(() => false)

        await renameFS(fileToRename, !fileExists ? newFileName : '')
            .then(() => console.log('successfully renamed'))
    } catch (error) {
        console.error(errorMessage)
    }
};

await rename();
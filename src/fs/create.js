import { writeFile } from 'fs/promises';
import path from 'path';


const create = async () => {
    const absolutePath = process.argv[1]
    const folderPath = path.dirname(absolutePath) + '/files'
    const data = 'I am fresh and young'
    const errorMessage = 'FS operation failed'

    try {
        writeFile(`${folderPath}/fresh.txt`, data, { flag: 'wx' }, err => {
            console.log(err)
        }).then(() => console.log('done'))
            .catch(err => {
                throw new Error(errorMessage)
            })
    } catch (err) {
        console.log(err)
    }
};

await create();
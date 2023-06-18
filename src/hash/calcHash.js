import { createHash } from 'crypto'
import { readFile } from 'fs/promises';
import path from 'path';

const calculateHash = async () => {
    const absolutePath = path.dirname(process.argv[1])
    const filePath = `${absolutePath}/files/fileToCalculateHashFor.txt`
    try {
        const data = await readFile(filePath, { encoding: 'utf-8' })

        const hash = createHash('sha256')
        const resultHash = hash.update(data)
        const resultHashAsHex = resultHash.digest('hex')

        return console.log(resultHashAsHex)
    } catch (err) {
        console.log('smth gone wrong... ' + '\n' + err.message)
    }
};

await calculateHash();
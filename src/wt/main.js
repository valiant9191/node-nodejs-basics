// worker.js - extend given function to work with data received
//  from main thread and implement function
//   which sends result of the computation to the main thread
import { Worker } from 'worker_threads'
import path from 'path';


const performCalculations = async () => {
    const absolutePath = path.dirname(process.argv[1])

    const worker = new Worker(`${absolutePath}/worker.js`, { workerData: 10 });

    worker.on('message', (result) => {
        console.log('Result:', result);
    });

    worker.on('error', (error) => {
        console.error('Worker Error:', error);
    });
};

await performCalculations();
// transform.js - implement function that reads data from process.stdin,
//  reverses text using Transform Stream and then writes it into process.stdout


const transform = async () => {

    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');
            this.push(reversedText);
            callback();
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
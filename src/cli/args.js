// args.js - implement function that parses command line arguments
//  (given in format --propName value --prop2Name value2, you don't need to validate it)
//   and prints them to the console in the format propName is value, prop2Name is value2

const parseArgs = () => {
    const argumentsPassed = process.argv.slice(2)
    const result = [];

    argumentsPassed.forEach((arg) => {
        if (arg.includes('--')) {
            const index = argumentsPassed.indexOf(arg)
            result.push([arg.replace('--', ''), argumentsPassed[index + 1]])
        }
    })

    result.forEach(item => {
        console.log(item.join(' is '))
    })
};

parseArgs();
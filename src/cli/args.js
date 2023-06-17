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
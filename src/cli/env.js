const parseEnv = () => {
    const argumentsPassed = process.env
    const result = [];

    for (const arg in argumentsPassed) {
        if (arg.includes('RSS_')) {
            result.push([arg, argumentsPassed[arg]])
        }
    }

    console.log(result.map(item => item.join('=')).join('; '))
};

parseEnv();
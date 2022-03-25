const fs = require('fs')
const readline = require('readline')
const os = require('os')


const rl = readline.createInterface({
    input: fs.createReadStream('output.txt'),
    crlfDelay: Infinity
})

const defaultHandler = err => {
    if (err) {
        throw new Error(err)
    }
}

if (fs.existsSync('result.txt')) {
    fs.truncate('result.txt', 0, defaultHandler)
}

rl.on('line', (line) => {
    const data = new Buffer(line, 'hex') + os.EOL
    console.log()
    const options = { flag: 'a+' }
    fs.writeFileSync('result.txt', data.toString(), options, defaultHandler)
    console.log(data)
})
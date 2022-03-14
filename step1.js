const fs = require('fs')
const argv = process.argv

cat = (path) => {
    fs.readFile(`${path}`, 'utf8', (err,data) =>{
        if (err){
            console.log(`Error reading ${path}`, err)
            process.kill(1)
        }
        else {
            console.log(data)
        }
    })
}

cat(argv[2])

// console.log(argv[2])
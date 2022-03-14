const axios = require('axios');
const fs = require('fs');
const argv = process.argv;

async function webCat (path) {
    try {
        r = await axios.get(`${path}`)
    console.log(r.data)
    }
    catch (err) {
        console.log('ERROR with the things', err.code)
    }
}

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

if (argv[2].startsWith('https')){
    webCat(argv[2])
} 
else {
    cat(argv[2])
}


// console.log(argv[2])
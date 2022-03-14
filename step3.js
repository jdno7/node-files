const axios = require('axios');
const fs = require('fs');
const argv = process.argv;

async function webCat (url, newFile) {

    if (newFile){
        console.log(url, newFile)
        try {
            r = await axios.get(`${url}`)
            fs.writeFile(`${newFile}`,`${r.data}`, 'utf8', (err,data) =>{
                if (err){
                    console.log(`Error finding ${newFile}`, err)
                    process.kill(1)
                }
                else {
                    console.log('New File Written')
                }
            })
            
        }
        catch (err) {
            console.log('ERROR with the URL', err.code)
        }
        
    }
    try {
        r = await axios.get(`${url}`)
        console.log(r.data)
    }
    catch (err) {
        console.log('ERROR with the things', err.code)
    }
}

cat = (path, newFile) => {
    if (newFile){
        fs.readFile(`${path}`, 'utf8', (err,data) =>{
            if (err){
                console.log(`Error reading ${path}`, err)
                process.kill(1)
            }
            else {
                fs.writeFile(`${newFile}`,`${data}`, 'utf8', (err,data) =>{
                    if (err){
                        console.log(`Error finding ${newFile}`, err)
                        process.kill(1)
                    }
                    else {
                        console.log('New File Written')
                    }
                }) 
            }
        })
    }
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

if (argv[2] === '--out' && argv[4].startsWith('https')){
    console.log(argv[4], argv[3])
    webCat(argv[4], argv[3])

}
else if (argv[2] === '--out' && argv[4].startsWith() != 'https'){
    cat(argv[4], argv[3])
} 
else if (argv[2].startsWith('https')){
    webCat(argv[2])
}

else {
    cat(argv[2])
}



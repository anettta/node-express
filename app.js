const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt',
{
    highWaterMark: 90000 //highWaterMark - control size
    
    // encoding: 'utf8'

});

stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error', (error)=>{
    console.log(error)
})


const fs = require('fs')

const readableStream = fs.createReadStream('./t1.txt',{
  encoding:'utf-8',
  highWaterMark: 2
})

const writeableStream = fs.createWriteStream('./t2.txt')

readableStream.on('data', (chunk)=> {
   console.log(chunk);
   writeableStream.write(chunk)
})






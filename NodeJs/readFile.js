const fs = require("fs")

const data = fs.readFileSync('input.txt')

fs.readFile('input.txt', function(err, data){
    if(err) return console.error(err)
    console.log('\nAsyn:\n'+data.toString())
})
console.log('\nreadFileSyn:\n' + data.toString())
console.log('Program Ended')
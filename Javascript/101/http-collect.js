const http = require('http')
let myData = ''

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8')
    res.on('data', (data) => {
        myData += data
    })
    res.on('end', () => {
        console.log(myData.length)
        console.log(myData)
    })
})
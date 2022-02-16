const http = require('http')
let array = []
counter = 0

function call(index) {
    let myData = ''
    http.get(process.argv[2 + index], (res) => {
        res.setEncoding('utf8')
        res.on('data', (data) => {
            myData += data
        })
        res.on('end', () => {
            counter++;
            array[index] = myData
            if (counter === 3){
                array.forEach(element =>console.log(element))
            }
        })
    })
}

for (let i = 0; i < 3; i++) {
    call(i)
}

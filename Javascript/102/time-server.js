const net = require('net');
const server = net.createServer(function (socket) {
    socket.end(now())
})

function now() {
    date = new Date();
    year = addZero(date.getFullYear())
    month = addZero(((date.getMonth()) + 1))
    day = addZero(date.getDate())
    hour = addZero(date.getHours())
    minute = addZero(date.getMinutes())
    return `${year}-${month}-${day} ${hour}:${minute}\n`
}

function addZero(date) {
    if (date < 10) {
        date = '0' + date
    }
    return date
}

server.listen(process.argv[2])
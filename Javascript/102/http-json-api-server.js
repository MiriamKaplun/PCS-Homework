const http = require('http')
const url = require('url')

const server = http.createServer(function (req, res) {
    const myUrl = url.parse(req.url, true)
    const pathName = myUrl.pathname
    const isoDate = new Date(myUrl.query.iso)
    let time

    if (pathName === '/api/parsetime') {
        const parsetime = {
            "hour": isoDate.getHours(),
            "minute": isoDate.getMinutes(),
            "second": isoDate.getSeconds()
        }
        time = parsetime
    }
    if (pathName === '/api/unixtime') {
        const unixtime = {
            "unixtime": isoDate.getTime()
        }
        time = unixtime
    }

    res.end(JSON.stringify(time))
})

server.listen(process.argv[2])
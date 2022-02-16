const http = require('http');
const fs = require('fs');
const path = require('path');

const contentTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript'
}

http.createServer(async (req, res) => {
    console.log(req.url);

    if (req.url === '/') {
        console.log('redirect')
        res.writeHead(301, { Location: '/index.html' });
    } else {
        res.setHeader('Content-Type', contentTypes[path.extname(req.url) || '.html']);

        const readStream = fs.createReadStream(`./public${req.url}`, 'utf-8');
        readStream.on('data', chunk => {
            res.write(chunk);
        });
        readStream.on('end', () => {
            res.end();
        });
        readStream.on('error', e => {
            switch (e.code) {
                case ('ENOENT'):
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.write('<h1>404 File Not Found</h1>');
                    break;
                default:
                    res.statusCode = 500;
                    res.write(`Internal Server Error. Unable to get ${req.url}`);
            }
        });
        res.end();
    }
}).listen(8080);
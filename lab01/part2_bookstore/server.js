const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const pagesDir = path.join(__dirname, 'pages');

const server = http.createServer((req, res) => {
    let filePath = path.join(pagesDir, req.url === '/' ? 'index.html' : `${req.url}.html`);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(pagesDir, '404.html'), (err404, errorContent) => {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(errorContent);
            });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, '/index.html', req.url);
    const extname = path.extname(filePath);
    const contentTypeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
    };
    const contentType = contentTypeMap[extname] || 'application/octet-stream';
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Página não encontrada');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Erro interno do servidor: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});
const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'Frontend', req.url);

    // Se o caminho leva a um diretório, adicione 'index.html' ao final
    if (fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, './Frontend/index.html');
    }

    // Obtenha a extensão do arquivo
    const extname = path.extname(filePath);

    // Mapeie extensões de arquivo para tipos de conteúdo MIME
    const contentTypeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        // Adicione mais tipos conforme necessário
    };

    // Determine o tipo de conteúdo com base na extensão do arquivo
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

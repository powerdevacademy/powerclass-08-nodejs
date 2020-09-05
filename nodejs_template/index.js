const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    // res.writeHead(200);
    res.writeHeader(200, { 'content-type': 'text/html; charset=utf-8' })

    let nome = "Powerdev";

    if(req.url.indexOf('?')) {
        const qs = querystring.parse(req.url.replace('/?', ''));
        nome = qs.nome || 'Ilustre Desconhecido'
    }
    
    res.end(`Olá, ${nome}!`);
});

server.listen(8080);
console.log('Servidor iniciado na porta 8080');
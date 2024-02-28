const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/cadastro-profissional', (req, res) => {
    res.sendFile(__dirname + '/cadastro-profissional.html');
});

app.get('/cadastro-equipamento', (req, res) => {
    res.sendFile(__dirname + '/cadastro-equipamento.html');
});

app.get('/cadastro-setor', (req, res) => {
    res.sendFile(__dirname + '/cadastro-setor.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
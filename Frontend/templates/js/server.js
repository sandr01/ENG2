const express = require('express');
const path = require('path'); // Adicione isto
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // Serve os arquivos estáticos

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); // Corrigido
});

app.get('/cadastro-profissional', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cadastro-profissional.html')); // Corrigido
});

app.get('/cadastro-equipamento', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cadastro-equipamento.html')); // Corrigido
});

app.get('/cadastro-setor', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cadastro-setor.html')); // Corrigido
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

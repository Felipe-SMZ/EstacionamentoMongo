const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;
const ProprietarioController = require('./controllers/ProprietarioControlls');

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('API do Estacionamento funcionando!');
});
app.use('/proprietario', ProprietarioController);
app.use((req, res) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


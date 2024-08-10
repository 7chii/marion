const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const sql = require('mysql');

//conexao BD
const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "marion"
});

//usar folder de paginas estaticas
app.use('/static', express.static('static'));
//aumentar limite de json recebido/mandado(para passar hash senha)
app.use(express.json({ limit: '50mb' }));

//pedido index(pagina html espolios)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});
//pedido stylesheet
app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/styles/stylesheetA.css'));
});
app.get('/stylesB', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/styles/stylesheetB.css'));
});
//img bg login/reg
app.get('/bgIndex', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/bgIndex.png'));
});
//menu
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/menu.html'));
});
//listen da porta 8080
app.listen(port, () => {
    console.log(`api listening on port ${port}`);
});
//require
const express = require("express");
const { get } = require("express/lib/response");
const path = require("path");

//variables 
const app = express();

//Paths
const publicPath = path.resolve(__dirname, './DH-Heroes/public');
const elIndex = path.resolve(__dirname,'./DH-Heroes/views/index.html');
const elBabbage = path.resolve(__dirname, './DH-Heroes/views/babbage.html');
const elBernersLee = path.resolve(__dirname, './DH-Heroes/views/berners-lee.html');
const elClarke = path.resolve(__dirname, './DH-Heroes/views/clarke.html');
const elHamilton = path.resolve(__dirname, './DH-Heroes/views/hamilton.html');
const elHopper = path.resolve(__dirname, './DH-Heroes/views/hamilton.html');
const elLovelace = path.resolve(__dirname, './DH-Heroes/views/hamilton.html');

//seteo de archivos estaticos
app.use( express.static(publicPath) );

//elServidor
app.listen(3030, () => {console.log('Servidor corriendo')});

// los Get:

app.get('/home',(req, res) => {
    res.sendFile(path.resolve(__dirname, './DH-Heroes/views/home.html'));
});

app.get('/', (req, res) => {
    res.sendFile(elIndex);
});
app.get('/babbage',(req, res) => {
    res.sendFile(elBabbage)
});
app.get('/berners-lee',(req, res) => {
    res.sendFile(elBernersLee)
});
app.get('/clarke',(req, res) => {
    res.sendFile(elClarke)
});
app.get('/hamilton',(req, res) => {
    res.sendFile(elHamilton)
});
app.get('/hopper',(req, res) => {
    res.sendFile(elHopper)
});
app.get('/lovelace',(req, res) => {
    res.sendFile(elLovelace)
});
app.get('/turing',(req, res) => {
    res.sendFile(path.resolve(__dirname, './DH-Heroes/views/turing.html'))
});
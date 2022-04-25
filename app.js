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
const laHamilton = path.resolve(__dirname, './DH-Heroes/views/hamilton.html');
const laHopper = path.resolve(__dirname, './DH-Heroes/views/hamilton.html');
const laLovelace = path.resolve(__dirname, './DH-Heroes/views/lovelace.html');
const elTuring = path.resolve(__dirname, './DH-Heroes/views/turing.html');

//seteo de archivos estaticos
app.use( express.static(publicPath) );

//elServidor
app.listen(3030, () => {console.log('Servidor corriendo')});

// los Get:

app.get('/juan',(req, res) => {
    res.sendFile(path.resolve(__dirname, './DH-Heroes/views/juan.html'));
});

app.get('/home', (req, res) => {
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
    res.sendFile(laHamilton)
});
app.get('/hopper',(req, res) => {
    res.sendFile(laHopper)
});
app.get('/lovelace',(req, res) => {
    res.sendFile(laLovelace)
});
app.get('/turing',(req, res) => {
    res.sendFile(elTuring)
});
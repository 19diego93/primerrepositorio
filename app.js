//require
const express = require("express");
const { get } = require("express/lib/response");
const path = require("path");
//variables 
const app = express();
//Paths
const publicPath = path.resolve(__dirname, './DH-Heroes/public') ;

//seteo de archivos estaticos

app.use( express.static(publicPath) );

//elServidor
app.listen(3030, () => {console.log('Servidor corriendo')});

// los Get:

app.get('/',(req, res) => {
    res.sendFile(path.resolve(__dirname, './DH-Heroes/views/home.html'));
})

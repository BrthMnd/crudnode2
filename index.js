require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5050;
const bodyParser = require('body-parser')

// * EJS 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views')

// ! ESTATICA
app.use('/', express.static(__dirname + '/src/public'))


app.use('/', require('./src/routers/RutasWeb'))




app.use((req, res, next) => {
    
    res.status(404).render('404' ,{
        titulo : "404",
        texto : "La página no existe"
    })
});

app.listen(port, () => console.log('*** escuchando en la puerta = ' + port + ' ***'))

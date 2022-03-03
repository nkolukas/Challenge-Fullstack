import express from "express"; //Se importa express
import {connector} from './src/mysql_connector.js'

//Inicio de express y el servidor
const app = express()

app.listen('8000', () => {
    console.log('Aplicacion iniciada en el puerto 8000');
})

//configuracion de archivos

app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))




app.get('/', (req, res) => {
    connector()
    res.render('index.html')
})
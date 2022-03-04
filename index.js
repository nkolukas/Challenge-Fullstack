import express from "express"; //Se importa express
import {connecto} from './src/mysql_connector.js'

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
    connecto()
    res.render('index.html')
})

app.get('/add/:concept/:amount',(req,res)=>{
    let concept = req.params.concept
    let amount = req.params.amount_val
    console.log(concept, amount_val())
})
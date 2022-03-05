import express from "express"; //Se importa express
import {connector} from './src/mysql_connector.js'

//Inicio de express y el servidor
const app = express()

app.listen('8000', () => {
    console.log('Aplicacion iniciada en puerto 8000');
})

//configuracion de archivos

app.use(express.static('public'))



app.get('/', (req, res) => {
//     connector()
//    res.render('index.html')
 })

app.get('/add/:concept/:amount',(req,res)=>{
    let concept = req.params.concept
    let amount = req.params.amount_val
    console.log(concept, amount)
})
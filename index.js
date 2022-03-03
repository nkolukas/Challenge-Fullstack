import express from "express"; //Se importa express


//Inicio de express y el servidor
const app = express()

app.listen('8000', () => {
    console.log('Aplicacion iniciada en el puerto 8000');
})











app.get('/', (req, res) => {
    res.send('aplicacion iniciada, todo va bien')
})
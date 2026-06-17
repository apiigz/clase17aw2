import express from 'express';
import {Pool} from 'pg';

const app = express()
const puerto = process.env.PORT || 3000 //del archivo .ENV o 3000

app.get('/test', (req, res)=>{
    res.send('test funcionando')
})

app.get('/hola', (req, res)=>{
    res.send('Gabriel Israel Vega')
})

app.listen(puerto, ()=>{
    console.log(`Escuchando server en el puerto ${puerto}`)
})

console.log('d9tQKql49GUHUHHY')

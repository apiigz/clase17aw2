import express from 'express';
import {Pool} from 'pg';

const app = express()
const puerto = process.env.PORT || 3000 //del archivo .ENV o 3000

app.get('/test', (req, res)=>{
    res.send('test funcionando')
})

app.listen(puerto, ()=>{
    console.log(`Escuchando server en el puerto ${puerto}`)
})

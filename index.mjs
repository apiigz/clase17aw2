import express from 'express';
import {Pool} from 'pg';
import 'dotenv/config'

/////////////
// Supabase => CLI console / libreria

const pool = new Pool({
    user: process.env.BD_HOST,
    password: process.env.BD_PASS,
    host: process.env.BD_USER,
    database: process.env.BD_NAME,
    port: process.env.BD_PORT,
})
/////////////
const app = express()
const puerto = process.env.PORT || 3000 //del archivo .ENV o 3000

app.get('/test', (req, res)=>{
    res.send('test funcionando')
})

app.get('/test-bd', async (req, res)=>{
    const resultado = await pool.query('SELECT * FROM mensajes')
    //Podes meter algún middleware... q
    res.json(resultado.rows)
})

app.listen(puerto, ()=>{
    console.log(`Escuchando server en el puerto ${puerto}`)
})

console.log('d9tQKql49GUHUHHY')

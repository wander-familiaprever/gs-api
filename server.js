const express = require('express')
const app = express()
const port = 3001
const url_base = '/gs/api/v1'


app.get(`${url_base}`, (req, res) =>{
    res.send('index.js')
})

app.listen(port, ()=>{
    console.log(`GS API rodando na porta ${port}`)
})
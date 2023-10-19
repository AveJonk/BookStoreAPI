const express = require('express')
const app = express()
const port = 7895



app.get('/',(req,res) =>{
        res.send("Waduhhhhhh")
    })

app.get('/tuturut',(req,res) =>{
        res.send("hmmm")
    })

app.post('/tuturut',(req,res) =>{
        res.send("Seblak")
    })

app.put('/tuturut',(req,res) =>{
        res.send("Mustofa")
    })

app.delete('/tuturut',(req,res) =>{
        res.send("Eskrim")
    })

app.listen(port,() => console.log(`Server running on port ${port}`))
'use strict'

// import le Paquet Express
const express = require('express')
// Creation une application express 
const app = express() 
const port = 3000
let pageAccueilTemplate = require('./pages/template-index.js')
app.get('/', async(req, res) => {
    const INDEX_CONTENU = await pageAccueilTemplate();
    res.send(INDEX_CONTENU);
})
// app.use('/css', express.static('C:/Users/ElMehdiNaimi/Desktop/AutoForamtion/JAVASCRIPT Training/createBackEndNodeJs/SIteMorgan/css'))
app.use('/style', express.static('C:/Users/ElMehdiNaimi/Desktop/AutoForamtion/JAVASCRIPT Training/Express-Js-BackEnd-2/pages/style'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
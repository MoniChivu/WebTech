// express
const express = require('express')
const bodyParser = require('body-parser')
const widgetRouter = require('./widget-router')

// aplicatia noastra express
const app=express()

// nu il facem const pt ca daca ar fi const am putea sa il accesam doar din acest fisier
app.locals.widgets=[{
    id:1,
    description:'some widget'
}]
app.use((req,res,next)=>{
    console.log('cacut ' + req.url)
    next()
})

// se aplica un middleware- fct care primeste req si res 
app.use(bodyParser.json())

app.use('/widget-api',widgetRouter)

// aplicatia asculta un port
app.listen(8080)
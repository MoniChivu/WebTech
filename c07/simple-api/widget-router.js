const express = require('express')
const router=express.Router()

// crud - create, read, update, delete

// post este un create
router.post('/widgets',(req,res)=>{
    // clientul trimite request sa adauge un widget
    const widget=req.body
    res.app.locals.widgets.push(widget)
    res.status(201).json({message:'created'})
})

// get este echivalentul lui read
router.get('/widgets',(req,res)=>{
    // vrem sa citim toate widgeturile
    // .json serializeaza la string, iar content type va fi app json
    if(parseInt(req.query.simplified) === 1){
        res.status(200).json(res.app.locals.widgets.map(e=>e.description))
    }
    res.status(200).json(res.app.locals.widgets)
})

// vrem sa citim un anumit widget din lista- dupa id
router.get('/widgets/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const widget=res.app.locals.widgets.find(e => e.id === id)
    if(widget){
        // am gasit widgetul
        res.status(200).json(widget)
    }
    else{
        res.status(404).json({message:'Not found'})
    }
})

// put este update - mai exista si patch...
router.put('/widgets/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    // ca sa pot edita widgetul am nevoie de indexul lui, nu de widget itself
    // daca avem un element care respecta conditia, va returna pozitia elementului, altfel returneaza -1
    const widgetIndex=res.app.locals.widgets.findIndex(e => e.id === id)
    if(widgetIndex !== -1){
        // am gasit widgetul
        res.app.locals.widgets[widgetIndex].description=req.body.description
        res.status(202).json({message:'accepted'})
    }
    else{
        res.status(404).json({message:'Not found'})
    }
})

// delete
router.delete('/widgets/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    // ca sa pot edita widgetul am nevoie de indexul lui, nu de widget itself
    // daca avem un element care respecta conditia, va returna pozitia elementului, altfel returneaza -1
    const widgetIndex=res.app.locals.widgets.findIndex(e => e.id === id)
    if(widgetIndex !== -1){
        // am gasit widgetul
        res.app.locals.widgets.splice(widgetIndex,1)
        res.status(202).json({message:'accepted'})
    }
    else{
        res.status(404).json({message:'Not found'})
    }
})

module.exports=router
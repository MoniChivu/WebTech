const express=require('express')
const bodyParser=require('body-parser')
const Sequelize=require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'sample.db',
    define: {
      timestamps: false
    }
})

const app=express()

const Book=sequelize.define('book',{
    title:Sequelize.STRING,
    content:Sequelize.TEXT
})

app.use(bodyParser.json())

app.get('/sync',async(req,res)=>{
    try{
        await sequelize.sync({force:true})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'some error occured'})
    }
})

app.get('/books',async(req,res)=>{
    try{
        const books=await Book.findAll()
        res.status(200).json(books)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'some error occured'})
    }
})

app.post('/books',async(req,res)=>{
    try{
        await Book.create(req.body)
        res.status(201).json({message:'created'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'some error occured'})
    }
})

app.get('/books/:bid',async(req,res)=>{
    try{
        const book=await Book.findByPk(req.params.bid)
        if(book)
        res.status(200).json(book)
        else{
            res.status(404).json({message:'not found'})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'some error occured'})
    }
})

app.put('/books/:bid',async(req,res)=>{
    try{
        const book=await Book.findByPk(req.params.bid)
        if(book){
            await book.update(req.body,{fields:['title','content']})
            res.status(202).json({message:'accepted'})
        }
        else{
            res.status(404).json({message:'not found'})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'some error occured'})
    }
})

app.delete('/books/:bid',async(req,res)=>{
    try{
        const book=await Book.findByPk(req.params.bid)
        if(book){
            await book.destroy()
            res.status(202).json({message:'accepted'})
        }
        else{
            res.status(404).json({message:'not found'})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'some error occured'})
    }
})
app.listen(8080)
const express = require('express')
const Sequelize = require('sequelize')
const bodyParser=require('body-parser')
const cors=require('cors')
const path=require('path')

const sequelize = new Sequelize({
	dialect:'sqlite',
	storage:'sample.db',
	define: {
		timestamps: false
	}

})

const Book = sequelize.define('book',{
	title : Sequelize.STRING,
	content : Sequelize.TEXT
})

const Chapter= sequelize.define('chapter',{
	title: Sequelize.STRING,
	content: Sequelize.TEXT
})

Book.hasMany(Chapter)

const app=express()
app.use(express.static(path.join(__dirname,'public')))
app.use(cors())
app.use(express.json())

app.get('/sync', async(req,res)=>{
	try{
		await sequelize.sync({force:true})
		res.status(201).json({message: 'tables created'})
	}
	catch(err){
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
})

app.get('/books',async(req,res)=>{
	try{
		const books= await Book.findAll()
		res.status(200).json(books)
	}
	catch(err){
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
})

app.post('/books',async(req,res)=>{
	try{
		const book = req.body
		await Book.create(book)
		res.status(201).json({message:'book created'})
	}
	catch(err){
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
})

app.get('/books/:bid',async(req,res)=>{
	try{
		const book=await Book.findByPk(req.params.bid,{
			include:Chapter
		})
		if(book){
			res.status(200).json(book)
		}
		else{
			res.status(404).json({message:'Not found'})
		}
	}
	catch(err){
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
	
})

app.put('/books/:bid',async(req,res)=>{
	try{
		const book=await Book.findByPk(req.params.bid)
		if(book){
			await book.update(req.body,{
				fields:['title','content']
			})
			res.status(202).json({message:'accepted'})
		}
		else{
			res.status(404).json({message:'not found'})
		}
	}	catch(err){
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
})

app.delete('/books/:bid',async(req,res)=>{
	try{
		const book=await Book.findByPk(req.params.bid)
		if(book){
			await book.destroy()
			res.status(202).json({message:'accepted'})
		}	else{
			res.status(404).json({message:'not found'})
		}
	}catch(err){
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
})

app.get('/books/:bid/chapters',async(req,res)=>{
	try{
		const book=await Book.findByPk(req.params.bid)
		if(book){
			const chapters=await book.getChapters()
			res.status(200).json(chapters)
		}
		else{
			res.status(404).json({message:'not found'})
		}
	}
	catch(err){
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
})

app.post('/books/:bid/chapters',async(req,res)=>{
	try{
		const book=await Book.findByPk(req.params.bid)
		if(book){
			const chapter=req.body
			chapter.bookId=book.id
			await Chapter.create(chapter)
			res.status(201).json({message:'chapter created'})
		}
		else{
			res.status(404).json({message:'not found'})
		}
	}
	catch(err){
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
})

app.get('/books/:bid/chapters/:cid',async(req,res)=>{
	try{
		const book = await Book.findByPk(req.params.bid)
		if(book){
			// nu avem o functie care sa ne dea un singur record
			// get chapter imi returneaza un array
			const chapters = await book.getChapters({
				where: {
					id : req.params.cid
				}
			})
			// ca sa extragem recordul din array vom face shift
			const chapter=chapters.shift()
			if(chapter)
			{
				res.status(200).json(chapter)
			}
			else{
				res.status(404).json({message:'chapter not found'})
			}
		}
		else{
			res.status(404).json({message:'book not found'})
		}
	}
	catch(err){
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
})

app.put('/books/:bid/chapters/:cid', async(req,res)=>{
	try{
		const book=await Book.findByPk(req.params.bid)
		if(book){
			const chapters= await book.getChapters({where:{ 
				id : req.params.cid}
			})
			const chapter=chapters.shift()

			if(chapter){
				await chapter.update(req.body)
				res.status(202).json({message:'chapter updated'})
			}
			else{
				res.status(404).json({message:'chapter not found'})
			}
		}
		else{
			res.status(404).json({message:'book not found'})
		}
	}
	catch(err)
	{
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}	
})

app.delete('/books/:bid/chapters/:cid',async(req,res)=>{
	try{
		const book=await Book.findByPk(req.params.bid)
		if(book){
			const chapters=await book.getChapters({where: {
				id: req.params.cid
			}})
			const chapter=chapters.shift()

			if(chapter){
				await chapter.destroy()
				res.status(202).json({message:'chapter destroyed'})
			}
			else{
				res.status(404).json({message:'chapter not found'})
			}
		}
		else{
			res.status(404).json({message:'book not found'})
		}
	}
	catch(err)
	{
		console.warn(err)
		res.status(500).json({message:'some error occured'})
	}
})

app.listen(8080)
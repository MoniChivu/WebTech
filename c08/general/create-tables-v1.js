const Sequelize = require('sequelize')

const sequelize=new Sequelize({
    dialect:'sqlite',
    // fisierul in care se scrie
    storage:'sample.db'
})

// cream o entitate - author ; baza se va numi authors
const Author=sequelize.define('author',{
    name:Sequelize.STRING,
    email:Sequelize.STRING
})

// create table if not exists
sequelize.sync()
    .then(()=>{
        console.log('tables created')
    })

const Sequelize = require('sequelize')

const sequelize=new Sequelize({
    dialect:'sqlite',
    // fisierul in care se scrie
    storage:'sample.db',
    define:{
        timestamps:false
    }
})

// cream o entitate - author ; baza se va numi authors
const Author=sequelize.define('author',{
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        }
    }
    
})

const Message = sequelize.define('message', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT
    }
  })

Author.hasMany(Message)

// force:true da drop la tableul vechi daca acesta exista
sequelize.sync({force:true})
  .then(()=>console.log('created'))
  .catch((error)=>{console.log(error)})
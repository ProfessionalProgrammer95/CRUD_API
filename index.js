const express = require('express')

//settings to access .env variables
require('dotenv').config()
const ConnectDb = require('./db/connect')
const cors = require('cors')

const PORT = process.env.PORT

//instance of express
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//middleware
//cors => cross origin resource sharing
app.use(cors())

// index.route - get request method
app.get('/', (req,res) => {
    res.status(200).json({status:true, msg:`Welcome to CRUD-api`})
})

//connecting router => app.user(path,router)
app.use(`/api/user`,require('./route/userRoute'))

//default route
app.all('**', (req,res) => {
    res.status(404).json({status:true, msg:`requested path not found`})
})


//server listen
app.listen(PORT,() => {
    if(process.env.MODE === 'development'){
        // to connect local database
        ConnectDb(process.env.MONGO_DEV);
    }else if(process.env.MODE === 'production'){
        //to connect Cloud database
        ConnectDb(process.env.MONGO_URL);
    }
    console.log(`Server is running on port  @ http://localhost:${PORT}`)
})
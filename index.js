const express = require('express')
const PORT = 4500

//instance of express
const app = express()

//app.get(route,controller)
// index.route - get request method
app.all('**', (req,res) => {
    res.status(200).json({status:true, msg:`Welcome to CRUD-api`})
})

//read all users => get request method
app.get(`/api/users`, function(req,res){
    res.status(201).json({status: true, msg:"all users"})
})

//create new user => post request
app.post(`/api/users/create`, function(req,res){
    res.status(201).json({status: true, msg:"create new user"})
})

//update existing user => patch request
app.patch(`/api/users/:id`, function(req,res){
    res.status(201).json({status: true, msg:"update existing user"})
})

//delete existing user => delete request
app.delete(`/api/users/:id`, function(req,res){
    res.status(201).json({status: true, msg:"delete existing user"})
})


//server listen
app.listen(PORT,() => {
    console.log(`Server is running on port  @ http://localhost:${PORT}`)
})
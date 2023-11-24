const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/test');




const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const UserModel = mongoose.model("users", UserSchema)

app.get("/getUsers", (req, res) => {
    UserModel.find({}).then(function (users){
        res.json(users)
    }).catch(function(err) {
        console.log(err)
    });
})
app.listen(3000, () =>{
    console.log('Server is running')
})
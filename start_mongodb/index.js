import express from 'express'
import mongoose from 'mongoose'
const app = express()

mongoose.connect('mongodb://localhost:27017/testDB')

const UserModel = mongoose.model('User',{name: String, email: String})// named parameters



const user = new UserModel({name: 'joshua',email: 'joshua@gmail.com'}) // initialize an object that contains the data

user.save() // store to the database

app.listen(3333)
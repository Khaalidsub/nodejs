import mongoose from 'mongoose'

 const userModel = mongoose.model('User',{
    email: String,
    name: String,
 })



export {userModel}
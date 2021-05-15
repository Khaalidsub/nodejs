import mongoose from 'mongoose';
const userSchema = mongoose.model('User',{name:String,email:String,phone:Number})


const findById = (id) =>{
    return userSchema.findById(id)
}

const findAll = () =>{
    return userSchema.find()
}

export  {userSchema,findById,findAll}
import mongoose from 'mongoose'


const mongooseConnect = (params)=>{
    return mongoose.connect(params)
}

export {mongooseConnect}

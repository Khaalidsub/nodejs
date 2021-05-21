import express from 'express'
import {userRouter} from './routes/users.route.js'
import {mongooseConnect} from './configs/index.js'
const app = express()



const bootstrap = async()=>{
    await mongooseConnect('mongodb://localhost:27017/express_routing')
    console.log('Mongoose connection has established');
    app.use(express.urlencoded())
    app.use('/users',userRouter)

    app.listen(3333, function(){
        console.log('listening on port ' + 3333);
    })
}

bootstrap()
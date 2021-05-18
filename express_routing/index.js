import express from 'express'
import {userRouter} from './routes/users.route.js'
const app = express()



const bootstrap = ()=>{

    app.use('/users',userRouter)

    app.listen(3333, function(){
        console.log('listening on port ' + 3333);
    })
}

bootstrap()
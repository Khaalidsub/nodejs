import {Router} from 'express'

const userRouter = Router()

userRouter.get('/helloWorld',(req, res)=>{
    res.send('<h1>hello world</h1>')
})

userRouter.get('/',(req, res)=>{
    res.json({})
})

userRouter.get('/:id',(req, res)=>{

    res.json({})
})

export {userRouter}
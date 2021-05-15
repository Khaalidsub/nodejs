import {Router} from 'express'

import {userSchema,findById,findAll} from './models/user.model.js'
const router = Router()


router.get('/',(req, res) =>{
    const users = findAll()
    console.log('users:',users);
    res.json(users)
})
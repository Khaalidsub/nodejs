import express from 'express'

const app = express()
const port = 3333


function  bootstrap(){
  app.listen(port,()=>{console.log('Server listening on port '+port)})
}


bootstrap()
import express from 'express';
import {getIndexRoute,getHomeRoute,getChatRoute} from './routes.js'
const app = express(); // returns an instance of a class



// create end points
app.get('/',getIndexRoute)
app.get('/home',getHomeRoute)
app.get('/chat',getChatRoute)


// 
app.post('/')
app.delete()
app.put()
app.patch()


// create a server listening to port 6666
app.listen(3333,()=>{
    console.log(`Server listening to port ${3333}`);
})




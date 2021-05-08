import express from 'express'
const app = express()
const port = 3333

app.use(express.urlencoded());

const users = [] 

// create an endpoint that renders a form of email input
app.get('/', (req, res) =>{

    res.send(
        `
        <h1>Hello, Fill this form to register your email </h1>
        <form action="/user" method="POST">
            <input type="text" name="email" id="email"  placeholder="Enter your email"  />
         
        </form>
        `
    )
})

// create an enpoint that creates the user

app.post('/user', (req, res) =>{
    console.log(req.body);
   const user =  req.body.email


    users.push({id:users.length+1, email:user})

    res.json(users[users.length-1])
})

// create an enpoint that returns all created users
app.get('/users', (req, res)=>{
 

//    let userEmails = []
//    for (let i = 0; i < users.length; i++) {
//     //    let modifiedUser = {email:users[i]}// email :""
//     let modifiedUser = {}
//     modifiedUser.email = users[i]

//        userEmails.push(modifiedUser)
//    }

    res.json(users)
})

// create an endpoints that returns only one user
app.get('/user/:id', (req, res)=>{
    const id = req.params?.id /// if this variable does not exist define as null/undefined
    console.log(id);
    if (!id) {
        res.status(404).send('Specify an id to get a user')
    }

    const user = users.find((user)=>user.id == id)
    if (!user) { // if the user is null of empty
        res.status(404).send('The id specified does not exist')
    }

    res.json(user)
})


// const userId = '1'
// const post.user  = 1

// post.user == userId // true
// post.user === userId // false





const onPortListen = () => {
    console.log(` Server is listening on port  ${port}`)
}
app.listen(3333,onPortListen)
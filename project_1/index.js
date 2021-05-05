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


    users.push(user)

    res.json({email:user})
})

// create an enpoint that returns all created users
app.get('/users', (req, res)=>{
    /* [
        {
            "email": ""
        }
        {
            "email": ""
        }
        {
            "email": ""
        }

    ]
   

//     */

   let userEmails = []
   for (let i = 0; i < users.length; i++) {
    //    let modifiedUser = {email:users[i]}// email :""
    let modifiedUser = {}
    modifiedUser.email = users[i]

       userEmails.push(modifiedUser)
   }

    res.json(userEmails)
})

// create an endpoints that returns only one user







const onPortListen = () => {
    console.log(` Server is listening on port  ${port}`)
}
app.listen(3333,onPortListen)
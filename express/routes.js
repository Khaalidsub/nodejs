export const getHomeRoute = (request,response) =>{

    response.send(`<h1>Welcome to home page</h1>`)
}

export const getIndexRoute = (request,response) =>{
   
        // console.log('hello , I have been called');
        response.send(`<h1>Hello, Welcome</h1>`)

}

export const getChatRoute = (request,response) =>{
    response.send(`<h1>Welcome to chat page</h1>`)
}

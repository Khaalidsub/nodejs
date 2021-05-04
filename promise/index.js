import axios from 'axios'
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchTodos = async ()=>{ // async and await
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(result.data);
}
const fetchTodos =  ()=>{ // then and catch
 axios.get('https://jsonplaceholder.typicode.com/todos').then(result=>{
     console.log(result.data);
 }).catch(err=>{
     console.log(err);
 })
 
}


// callback
const getResult =  (result)=>{
    console.log(result.data);
}
// const fetchTodos = ()=>{
//     console.log('hello'); // 1

//     axios.get('https://jsonplaceholder.typicode.com/todos/1').then(getResult)

//     console.log('hello second time'); // 2

// }

const fetchTodos2 = async ()=>{
    console.log('hello'); // 1

    const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1') //2
    console.log(result.data); 

    console.log('hello second time',result.data); // 3
}
// fetchTodos()
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1'
// console.log('hello first time'); // 1

// const getResult =  (result) => {
//     console.log(result.data); // 3
//     console.log(' this will be executed last');
// }
// axios.get('jsonplaceholder.typicode.com/todos').then(getResult) 

// console.log('hello second time'); // 2


const getResult = () => {
    axios.get(url)
        .then(result => {

        axios.get(`https://jsonplaceholder.typicode.com/users/${result.data.userId}`)
            .then(users=>{
                    console.log(users.data);
             })
     })
}

const getDataFromInternet = async () => {
    console.log('hello first time'); // 1
   const result = await axios.get(url) // 2
//    const users = await axios.get(`https://jsonplaceholder.typicode.com/users/${result.data.userId}`)
   console.log(result.data); // 3 
   console.log('hello second time'); // 4
}

getDataFromInternet()
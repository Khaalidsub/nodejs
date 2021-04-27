// const fetch = require('node-fetch')
import fetch from 'node-fetch'
fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.text())
.then(body => console.log('hello data :',body));
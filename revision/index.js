// const express = require('express'); commonjs
import value from 'express' //module
const app = value()
// import {getUser} from './exports.js'
import getValue from './exports.js'
// getUser()
const getCallBack =(req,res)=>req.send('hell world');// position parameters
const getCallBack =(req,res)=>{ 
    
    req.send('hell world')

};

function getValue({age,email} /* named paremeters */){

}
function getValue(age,email /* position paremeters*/){

}
// function getValue([name = 'name', age= 23]){

// }


getValue({email:'', age:23,});

getValue(23,'email');

// getValue() name , age

app.get('/',getCallBack)

// const person = {
//     name: '',
//     age:31,
//     getName:()=>person.name,
//     getAge:()=>person.age,
//     setAge:(age)=>person.age = age,
//     setName:(name)=>person.name = name,
// }

// person.setAge(4)
// person.setName('khaalid')

// person.getName()
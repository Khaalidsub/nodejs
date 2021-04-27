const isString = require('./utils').isString
const isEmail = require('./utils').isEmail
// const {isEmail,isString} = require('./utils')
// const isEmail = 
const getName = (name) =>{
    if (isString(name)) {
        console.log(name);
    }
}

const getEmail = (email) =>{
    if (isString(email) && isEmail(email)) {
        console.log(email);
    }
}

const email='khaalid@'
getEmail(email)

const name = 'khaalid'
getName(name)
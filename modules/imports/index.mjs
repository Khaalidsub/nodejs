import {isString,isEmail} from './utils'
// import * as utils from './utils'
const getName = (name) =>{
    if (isString(name)) { // utils.isString(name)
        console.log(name);
    }
}

const getEmail = (email) =>{
    if (isString(email) && isEmail(email)) { // utils.isEmail(email)
        console.log(email);
    }
}

const email='khaalid@'
getEmail(email)

const name = 'khaalid'
getName(name)
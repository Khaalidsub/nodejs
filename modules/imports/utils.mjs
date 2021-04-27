 export const isString = (value)=>{
    if (typeof value === 'string') {
    return true
    }else{
        throw new Error(value+' is not a  type of string')
    }
}



  export const isEmail = (email)=>{
    if (email.includes(input)) {
        return true
    }
    throw new Error(email+' is not a valid email')

}



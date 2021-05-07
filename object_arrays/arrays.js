const users = ['broadsword1','broadsword2','broadsword3']

// console.log(users);
let modifiedUsers = []

function getUser(user){
    console.log('hello :', user);

    let modifiedUser = user + ' 34'
    modifiedUsers.push(modifiedUser);
}

users.forEach(getUser)

// for (let i = 0; i < array.length; i++) {
//   const user =   users[i]
    
// }

const modified = users.map((user)=>{
    let modifiedUser = user + ' 56'
 
    return modifiedUser
})
// users.filter
console.log(modifiedUsers);
console.log(modified,users);
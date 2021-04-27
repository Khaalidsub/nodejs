// const getName = (value)=>{
//     return value;
// }

// // getName('');
// value without callback
// const multiply = (result,secondValue)=>{
   
//         return result * secondValue
   
// }

// const addValue = (value,value2)=>{
// //    const result =  // 3
//    setTimeout(() => {
//        console.log(value + value2);
//     return value + value2
//    }, 300);
// //   return multiply(result,value3) // 15
// }

// const result = addValue(1,2)
// console.log(multiply(result,5));



const multiply = (result)=>{
   
    return result * 5

}

const addValue = (add1,add2,multiply)=>{ // callback
//    const result =  // 3
setTimeout(() => {
    const result = add1 + add2
   console.log(multiply(result));
// return value + value2
}, 300);
//   return multiply(result,value3) // 15
}

const result = addValue(1,2,multiply)
// console.log(multiply(result,5));
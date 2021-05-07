// const person = {
//     name:'' ,
//     email:'',
//     getName:()=>{return this.name}

// }
// const person2 = {
//     name:'' ,
//     email:'',
//     getName:()=>{return this.name}

// }

// const people = [person,person2]

const people = [
  {
    name: "john1",
    email: "",
    getName: () => {
      return this.name;
    },
  },
  {
    name: "john2",
    email: "",
    getName: () => {
      return this.name;
    },
  },
  {
    name: "john3",
    email: "",
    getName: () => {
      return this.name;
    },
  },
];


const filterCondition = (person)=>{
    return person.name.includes('john1')
} 
const john1 = people.filter(filterCondition)
console.log(people);
console.log('Here is the filtered list :', john1);

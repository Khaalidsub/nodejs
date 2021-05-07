class Person {
    name
    email

    constructor(n, e) {
        this.name = n
        this.email = e
    }

    getName() { return this.name}
    getEmail() { return this.email}
}

const person = new Person("khaalid","john@gmail.com")

// person.name
// person.email

// person.getName()
// person.getEmail()

const person2 = new Person()
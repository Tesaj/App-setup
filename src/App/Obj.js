const person = {
    firstName: "Joseph",
    lastName: "Nganda",
    bornYear: 1990,
    age: 29

};

let message = `Hello my name is ${person.firstName} ${person.lastName} and i was born in ${person.bornYear} and am ${person.age}`;
console.log(message);

export {person,message};
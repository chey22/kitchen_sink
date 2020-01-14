var name = "Cheyenne"
const states = 50

var add = (5 + 4)
console.log(add)
// math

function saysHello() {
    alert ("Hello World!")
}

saysHello ()

function checkAge(name, age) {
    if (age < 21) {
        alert ("Sorry " + name + ", you aren't old enough to view this page!")
    } else {
        null;
    }
}    

checkAge("Charles", 21)

checkAge("Abby", 27)

checkAge("James", 18)

checkAge("John", 17)

let vegetables = ["bell peppers", "asparagus", "onions"]

for (let i = 0; i < vegetables.length; ++i) {
    console.log(vegetables [i]);
}

let people = [
    {
        name: "Tom",
        age: 19
    },

    {
        name: "Bob",
        age: 40
    },

    {
        name: "John",
        age: 20
    },

    {
        name: "Fred",
        age: 60
    },

    {
        name: "Bill",
        age: 45
    }
]

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age)
}

function getLength (word) {
    wordLength = word.length;
    return wordLength
}

x = getLength("Hello World");
console.log(x);

if (x % 2 == 0) {
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!)")
}
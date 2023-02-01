const listOfNumbers=[2,3,4,5,6]

const listOfNumbersSquared=listOfNumbers.map(e=>e**2)

console.log(listOfNumbers)
console.log(listOfNumbersSquared)

const students = [
    {
        name: 'John',
        yearOfBirth: 1990
    },
    {
        name: 'Joe',
        yearOfBirth: 2007
    },
    {
        name: 'Alex',
        yearOfBirth: 1987
    }
]

const currentYear = 2022

// const adults = //use array map to get a list of students over 18

const adultsf=students.filter(e=>(currentYear - e.yearOfBirth)>=18)
const adults=adultsf.map(e=>e.name)

console.log(adults)
const animals=['tiger','lion','monkey','cat','doggy']

const animalToDel='monkey'

const filteredAnimals=animals.filter(e=>e!=animalToDel)

console.log(filteredAnimals)

const travelers = [
    {
        name: 'John',
        hasVisa: false
    },
    {
        name: 'Joe',
        hasVisa: true
    },
    {
        name: 'Alex',
        hasVisa: true
    }
]


// const filteredTravelers =  use array filter method to get a list of travelers that have a visa

const filteredTravelers = travelers.filter(e=>e.hasVisa)
console.log(filteredTravelers)
class Cat{
    constructor(name){
        this.name=name;
    }

    getName(){
        return this.name
    }
}

const Doggo=class{
    constructor(name){
        this.name=name
    }
}

const testCat=new Cat('Hani')
console.log(testCat.getName())

class RNGenerator {
    constructor(number){
        this.number=number
    }
    getRandomNumber(){
        return Math.floor(Math.random()*this.number)
    }
}

const RNG = new RNGenerator(17)

console.log(RNG.getRandomNumber()) // should output a random number between 0 and 17
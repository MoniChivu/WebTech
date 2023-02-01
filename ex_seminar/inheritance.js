class Human {
    constructor(name) {
        this.name = name
    }

    getDetails () {
        return this.name
    }
}

const Doggo = class {  //alternative way to declare a class
    constructor(name) {
        this.name = name
    }
}

class Student extends Human{
    constructor(name, uni){
        super(name)
        this.uni=uni
    }

    getDetails(){
        return `${this.name} is a student of ${this.uni}`
    }

    set details(details) {  //the constructor goes trough setters too
        console.log('This property is fake! Try setting name and university instead!')
    }
}

const testStudent1 = new Student('Alex', 'ASE')
console.log(testStudent1)
console.log(testStudent1.details)
console.log(testStudent1.getDetails())
testStudent1.details = 5

Human.prototype.sayHi = function() {
    console.log(`Hi, my name is ${this.name}`)
}

testStudent1.sayHi()


// Implement the following structure: 
// Software is a class that has a run method. A browser is a type of Software and it can have multiple Plugins. The list of Plugins may only take objects of Plugin type.

class Software{
    run(){

    }
}

class Browser extends Software{
    constructor(pluginList){
        this.pluginList=pluginList
    }
}

class Plugin{
    constructor(name){
        this.name=name
    }
}
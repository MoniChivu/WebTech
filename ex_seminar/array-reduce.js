const listOfNos= [4,9,20,5]

const totalSum=listOfNos.reduce((prev,curr)=>prev+curr,)

console.log(totalSum)

const students = [
    {
        name: 'John',
        money: 100
    },
    {
        name: 'Joe',
        money: 50
    },
    {
        name: 'Alex',
        money: 250
    },
    {
        name: 'Joe',
        money: 300
    }
]

// const totalGroupMoney = use array reduce to calculate how much money the group has, excluding anyone named Joe

const filteredStudents=students.filter(e=>e.name!='Joe')
console.log(filteredStudents)

const totalGroupMoney = filteredStudents.reduce((prev,curr)=>prev+curr.money,0)
console.log(totalGroupMoney)
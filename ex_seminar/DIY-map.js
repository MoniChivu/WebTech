const data=[2,3,4,5]

const customMap=(data,transformation)=>{
    const newData=[]
    for(const oldData of data){
        newData.push(transformation(oldData))
    }
    return newData
}

console.log(customMap(data,(e)=>e*5))

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
    }
]

const customReduce = (data)=>{
    newStudents=0;
    for(old of data){
        newStudents+=old.money
    }
    return newStudents
}

// const totalGroupMoney = use customReduce to calculate how much money the group has

const totalGroupMoney = customReduce(students)
console.log(totalGroupMoney)
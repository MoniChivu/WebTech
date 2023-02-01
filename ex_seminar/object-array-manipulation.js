const objectsToFilter = [
    {
        name: 'John',
        hasVisa: true,
        yearOfBirth: 1990
    },
    {
        name: 'Joe',
        hasVisa: false,
        yearOfBirth: 2007
    },
    {
        name: 'Alex',
        hasVisa: false,
        yearOfBirth: 1987
    },
    {
        name: 'Alex',
        hasVisa: true,
        yearOfBirth: 1960
    }
]

const filterObject = {
    hasVisa: true,
    name: 'Alex'
}

const filterArray=(array,filter)=>{
    return array.filter(element=>{
        let meetsFilterCriteria=true
        for(const filterCondition of Object.keys(filter)){
            if(!element[filterCondition] || element[filterCondition !==filter[filterCondition]]){
                meetsFilterCriteria=false
                break
            }

        }
        return meetsFilterCriteria
    })
}

console.log(filterArray(objectsToFilter,filterObject))


const array1 = [1990,2007,1987,1960];
array1.sort();
console.log(array1);


const sortField = 'yearOfBirth'

// const sortByField =   make a function that sorts the provided array by the named sortingField
const sortByField = (array,filter)=>{
    return array.sort((a,b)=>{
        if(a[filter]>b[filter]){
            return 1
        }
        else {
            if(a[filter]<b[filter]){
                return -1
            }
            else return 0
                 
            }
            
    })

}
console.log(sortByField(objectsToFilter, sortField))
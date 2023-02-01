const giveRaises = (currentSalaries, raise) => {  
    // give raises, take an array of salaries and give a percentual raise to each, 
    // should throw exceptions if the first parameter is not an array, if the second parameter is not a number greater than 0 
    // or if any of the encountered salary values is not a number greater than 0

    if(!((currentSalaries instanceof Array) || currentSalaries ==='array')){
        throw new Error('This should be an array')
    }

    if((typeof raise == 'number') || (raise instanceof Number))
    {
        if(raise<0){
            throw new Error('This number should de greater than 0')
        }
        else{

            for(var i=0;i<currentSalaries.length;i++){
                console.log(currentSalaries[i])
                if(typeof currentSalaries[i] !=='number'){
                    throw new Error('Salary should be a number')
                }
                else if(currentSalaries[i]<0){
                    throw new Error('Salary should be > 0')
                }
                else{
                    currentSalaries[i]+=currentSalaries[i]*(raise/100)
                }
            }

        }
        
    }
    else{
        console.log(typeof(raise))
        throw new Error('Raise should be a number')
       
    }
    
    for(var i=0;i<currentSalaries.length;i++){
        console.log(currentSalaries[i])
    }
    


}

try {
    giveRaises([500, 1000, 750], 10) // should pass

    // giveRaises(75, 10) // should throw error

    // giveRaises([500, 1000, 'coffee'], 10) // should throw error

    giveRaises([500, 1000, 750], 'a small loan of a million dollars') // should throw error
} catch (error) {
    console.warn(error)
}





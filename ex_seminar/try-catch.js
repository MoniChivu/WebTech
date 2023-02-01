const orderCoffe = (coffeType)=>{
    const allowedTypes=['Normal','Decaf']
    if(allowedTypes.find(e=>e===coffeType)){
        console.log(`Preparing coffe ${coffeType}`)
    }
    else {
        throw new Error('Coffe type not supported')
    }
}

try{
    orderCoffe('Normal')
    orderCoffe('Sweet')
}
catch(error){
    console.warn(error)
}

orderCoffe('Sweet')
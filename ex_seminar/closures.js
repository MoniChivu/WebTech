function square(){
    const cache={}
    const calc=(number)=>{
        if(cache[number]){
            console.warn('cache')
            return cache[number]
        }
        else{
            cache[number]=number**2
            return number**2
        }
    }
    return calc
}

const MathOps = square()
console.log(MathOps(3))
console.log(MathOps(3))
console.log(MathOps(4))

function fibGen() { //should calculate fibonacci number
    const cache={}
    const fibo=(number)=>{
        if(number<=1)
            return number
        else{
            if(cache[number])
            {
                console.warn('cache')
                return cache[number]
            }
            const result = fibo(number - 1) + fibo(number - 2);
            cache[number] = result;     
            return result
        }
    }
    return fibo
}

const fibonacciGenerator = fibGen()
console.log(fibonacciGenerator(3))
console.log(fibonacciGenerator(3))
console.log(fibonacciGenerator(5))
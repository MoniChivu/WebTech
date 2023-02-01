

const sampleText='pisica lui mami'

const getFirstLetters = (text)=>{
    return text.split(' ').map(e=>e[0]).join('')
}

console.log(getFirstLetters(sampleText))


const sample = 'a short sample text'
// const sample='pisica'

// const reverseWords = make a function that reverses the words, but not their order, so that the sample text becomes: 'a trohs elpmas txet'
const reverseWords=(text)=>{
    return text.split(' ').map(e=>e.split('').reverse().join('')).join(' ')
}

console.log(reverseWords(sample)) 

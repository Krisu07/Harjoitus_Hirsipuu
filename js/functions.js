const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
     "programming", 
     "javascript",
     "database", 
     "markup", 
     "framework", 
     "variable",
     "stylesheet",
     "library", 
     "asynchronous",
     "hypertext"
]

let randomizeWord = ''
let maskedWord = ''

const newGame = () => {
     const random = Math.floor(Math.random() * 10) + 1
     randomizeWord = words[random]
     maskedWord ="*".repeat(randomizeWord.length)
     console.log(randomizeWord)
     output.innerHTML = maskedWord
}
newGame()

input.addEventListener('keypress',(e) => {
     if(e.key === 'Enter'){
          e.preventDefault()

          const guess = input.value
          if(guess.toLowerCase() === randomizeWord.toLowerCase()){

          } else if (guess.length === 1){
               
          }else{

          }
          input.value=''
     }
})
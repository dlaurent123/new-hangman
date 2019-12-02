import { hangManPics } from "./hangmanPics.js"
class View {
    constructor(el,game){
        this.el = el
        this.game = game
        this.game.gameStart()
        this.gameSetup()
        this.displayBoard()
        this.displayGuessedLetters()
        this.displayHangman()
        
        
    }
    bindEvents(){
        document.querySelector("form")
        form.addEventListener("submit",e =>{
            e.preventDefault()
            let input = document.querySelector("input")
            let guess = input.value
            input.value = ""
            if(this.game.isValidGuess(guess)){
                this.game.enterValidGuess(guess)
            }
        })
    }
    displayBoard(board = this.game.board){
        let ul = document.querySelector("#board")
        ul.innerHTML = ""

        for (let i = 0; i < board.length(); i++) {
            let li = document.createElement("li")
        li.innerText += board.get(i) + " ";
            ul.appendChild(li)
        }
    }
    displayGuessedLetters(){
        let guesses = document.querySelector("#guessesMade")
        guesses.innerHTML = ""
        guesses.innerText = this.game.guessedLetters.join(", ")
    }
    displayHangman(){
        document.querySelector("#hangManPic").innerText = hangManPics[this.game.guessesRemaining]

    }
    gameSetup() {
       let gameDiv = document.querySelector(".gameDiv") 
      
       let guessesMade = document.createElement("ul")
        guessesMade.id = "guessesMade"
        
       
       let hangManPic = document.createElement("div")
        hangManPic.id = "hangManPic"
       
       let board = document.createElement("ul")
        board.id = "board"
       
       let form = document.createElement("form")
       
       let input = document.createElement("input")
        input.placeholder = "Enter A Letter Here"
       
       
       
       
       let inputLabel  = document.createElement("label")
        inputLabel.innerHTML  = "Good Luck! "

      

       
       form.appendChild(hangManPic)
       form.appendChild(guessesMade)
       form.appendChild(board)
       
       form.appendChild(inputLabel)
       form.appendChild(input)
       
       gameDiv.appendChild(form)
       

       



    }


}


export default View;
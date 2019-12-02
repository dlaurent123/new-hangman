import View from "./view.js"
import HumanPlayer from "./humanPlayer.js"
import Game from "./game.js"
import ComputerPlayer from "./computerPlayer.js"

document.addEventListener("DOMContentLoaded",() => {
   
let el = document.querySelector("#gameDiv")


let human = new HumanPlayer("corey")
let robo = new ComputerPlayer();
let game = new Game({ref: robo, guesser: human})

new View(el,game)

   
    
    
})
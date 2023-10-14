let playerInput = document.getElementById('playerInput')
let restart = document.getElementById('restart')
let boxes = Array.from(document.getElementsByClassName('box'))

const victoryFlag = getComputedStyle(document.body).getPropertyValue('--winner-blocks')


const O_MOVE = "O"
const X_MOVE = "X"
let currentPlayer = X_MOVE
let spaces = Array(9).fill(null)

const startGame =() =>{
    boxes.forEach(box => box.addEventListener('click',clickBox))
}

function clickBox(i){
    const id = i.target.id

    if(!spaces[id]){
        spaces[id]= currentPlayer
          i.target.innerText = currentPlayer


          if(playerWon()!==false){
            playerInput.innerHTML = `${currentPlayer} has won`
            let winning_blocks = playerWon()
            
           playerWon().map( box => boxes[box].style.backgroundColor=victoryFlag)
           return  
          }

        currentPlayer = currentPlayer == X_MOVE ? O_MOVE : X_MOVE
        
    }
}
const endGoal = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]


]

function playerWon(){
    for(const need of endGoal){
        let [a,b,c] = need

        if (spaces[a] && (spaces[a]==spaces[b] && spaces[a] == spaces[c])){ 
            return[a,b,c]
            
        }
    }
    return false
}

restart.addEventListener('click',newGame)

function newGame(){
    spaces.fill(null)

    boxes.forEach( box =>{
        box.innerText = ''
    })

    playerInput.innerHTML='Game!!'

    currentPlayer = X_MOVE
}



startGame()
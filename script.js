

let currentTurn=  "player1";
let currentPlayer;
let all = [
    null , null , null ,
    null , null , null , 
    null  , null, null
]
console.log()
function message(check){
    const elementMess = document.getElementById("winning-message-text") ; 
    let messageRender ="" 

    messageRender = check === "draw"  ? check : `$ winner : ${currentTurn}`; 
    elementMess.innerHTML = messageRender
}
function render(){
    const elementGame = document.getElementById('game') ; 
    elementGame.innerHTML = ""
    const elementContainer = document.createElement("div") ; 
    
    elementContainer.setAttribute("class" , "container") ; 
    all.forEach((element , index) => {
       const elementBox = document.createElement("div") ; 
       elementBox.setAttribute("class" , "box")  ; 
       elementBox.innerHTML = element ===null ? "" : element ; 
       elementBox.onclick =(e)=>{
        if(element === null){
            currentTurn === "player1" 
            ? all[index] = "X"   : all[index] = "O"  ;
            const check = checkWin() ; 
            console.log(check)
            check === false ? ( currentTurn = currentTurn === "player1" ? "player2" : "player1"  )  : message(check); 

          console.log(all)
            render()
        }else{
              
        }
       }
       elementContainer.appendChild(elementBox);
    });
    elementGame.append(elementContainer)

}
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWin(){
    const value =  currentTurn === "player1" ? "X" : "O"  ; 
let check = false ; 
    winningCombinations.forEach(element => {
       const  checkTrue  = element.every(item => all[item] === value);
       if(checkTrue === true){
             check = true ; 
       }
    
    }); 

    if(check === false && (all.some(item => item === null)) === false ){
        check = "draw" ;
    }
    return check;
}
render() ; 
restartButton.onclick = ()=>{
all = [
    null , null , null ,
    null , null , null , 
    null  , null, null
] ; 
render()
}


const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');

tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

resetButton.addEventListener('click', resetBoard);

/// WRITE YOUR CODE AFTER THIS LINE
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let currentPlayer = "X";
let running = false;
function getEmptyBoard(){
     tiles = [
        ["."] ["."] ["."]
        ["."] ["."] ["."]
        ["."] ["."] ["."]
    ]
}
console.log(tiles);
/*based on the indexes within the board, which are:
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]
We marked them as strings with dots, then console logged them,
thus, making the returned value a "." string. Marking all 9
makes them independent, even though they have the same string value.
*/

function getPlayerMove (tiles, currentPlayer){
tiles.add(currentPlayer); 
}
/*We defined parameters as tiles and players
and made it so that when u click on a tile
the current player (be it X or 0) marks the tile */

/* We used an if else to change between player 1 and player 2("X" and "O")\
We also used announcer.textContent to show who's turn it is
*/
let turn = true;
let finish = false;
let count=0;
function userAction(tile, index) {
    // TODO Handle when the user clicks on a tile
     if(tiles[index] != "X" && tiles[index] != "O" && turn == true && finish == false){
       tile.innerText = "X";
       tiles[index] = "X";
       changePlayer("X");   
       getWinningPlayer();
     
    }
    if(tiles[index] !="X" && tiles[index] != "O" && turn == false && finish == false ){
        tile.innerText = "O";
        tiles[index] = "O";
        changePlayer("O");
        getWinningPlayer();
        
    }

    count++
    console.log(count)
   
}

function changePlayer(player){
    if (player == "X"){
        turn = false;
        playerDisplay.innerHTML = "O";
    }
    if (player == "O"){
        turn = true;
        playerDisplay.innerHTML = "X";
    }
}


function resetBoard() {
    // TODO Empty the board
    location.reload();
}


function getWinningPlayer () {
    if(tiles[winConditions[0][0]] == "X" && tiles[winConditions[1][0]] == "X" && tiles[winConditions[2][0]] == "X") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player X has won!";
    finish=true;
    return;
 }
 else if(tiles[winConditions[0][0]] == "O" && tiles[winConditions[1][0]] == "O" && tiles[winConditions[2][0]] == "O") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player O has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[0][0]] == "X" && tiles[winConditions[0][1]] == "X" && tiles[winConditions[0][2]] == "X") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player X has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[0][0]] == "O" && tiles[winConditions[0][1]] == "O" && tiles[winConditions[0][2]] == "O") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player O has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[1][0]] == "X" && tiles[winConditions[1][1]] == "X" && tiles[winConditions[1][2]] == "X") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player X has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[1][0]] == "O" && tiles[winConditions[1][1]] == "O" && tiles[winConditions[1][2]] == "O") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player O has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[2][0]] == "X" && tiles[winConditions[2][1]] == "X" && tiles[winConditions[2][2]] == "X") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player X has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[2][0]] == "O" && tiles[winConditions[2][1]] == "O" && tiles[winConditions[2][2]] == "O") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player O has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[0][1]] == "X" && tiles[winConditions[1][1]] == "X" && tiles[winConditions[2][1]] == "X") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player X has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[0][1]] == "O" && tiles[winConditions[1][1]] == "O" && tiles[winConditions[2][1]] == "O") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player O has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[0][2]] == "X" && tiles[winConditions[1][2]] == "X" && tiles[winConditions[2][2]] == "X") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player X has won!";
    finish = true;
    return;
   
 }
 else if(tiles[winConditions[0][2]] == "O" && tiles[winConditions[1][2]] == "O" && tiles[winConditions[2][2]] == "O") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player O has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[0][0]] == "X" && tiles[winConditions[1][1]] == "X" && tiles[winConditions[2][2]] == "X") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player X has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[0][0]] == "O" && tiles[winConditions[1][1]] == "O" && tiles[winConditions[2][2]] == "O") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player O has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[0][2]] == "X" && tiles[winConditions[1][1]] == "X" && tiles[winConditions[2][0]] == "X") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player X has won!";
    finish = true;
    return;
 }
 else if(tiles[winConditions[0][2]] == "O" && tiles[winConditions[1][0]] == "O" && tiles[winConditions[2][0]] == "O") {
    announcer.classList.remove('hide');
    announcer.innerHTML = "Player O has won!";
    finish = true;
    return;
    }  else if(isBoardFull()) {

    announcer.classList.remove('hide');
    announcer.innerHTML = "It's a tie!";
    finish=true;
    return;
     }
 

 }

 function isBoardFull () {
    let verify = 0;
   for(let i = 0; i < tiles.length; i++){
        if (tiles[i] == "X" || tiles[i] == "O") verify ++;
   }

    if(verify==9) {
      
        return true;
      
    } return false;
 }

function main () {
    getEmptyBoard();
    getPlayerMove();
    userAction();
    changePlayer();
    resetBoard();
    getWinningPlayer();
    isBoardFull();
}

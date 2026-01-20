let currentPlayer = 'X';


function setBoard(){
    let board = [document.querySelector("casella")];
    for(let i = 0; i < board.lenght; i++){
        let currentBox = board[i];
        currentBox.onClick(() => {
            //pintar jugada
            //comprovar guanyador
            //canviar jugador
        });
    }
}

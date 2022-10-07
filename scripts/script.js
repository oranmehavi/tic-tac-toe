const gameBoard = (() => {
    const board = [[], [], []];
    const addMarker = (marker, positions) => {
        board[positions[0]][positions[1]] = marker;
    };
    const printBoard = () => {
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < 3; j++) {
            console.log(board[i][j]);
          }
        }
      };
    return {
        addMarker,
        printBoard
    };
    
})();

const playerFactory = (name) => {
    const getName = () => name;
    return {
      getName
    };
};


const gameController = (() => {

})();

const displayController = (() => {
    const DOMboard = document.querySelector('.board');
    const renderBoard = () => {
      DOMboard.innerHTML = '';
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          let cell = document.createElement('div');
          cell.classList.add('cell');
          cell.addEventListener('click', (e) => {
            
          });
          cell.setAttribute('data-row', `${row}`);
          cell.setAttribute('data-col', `${col}`);
          DOMboard.appendChild(cell);
        }
         
      }
    };
    return {
      renderBoard
    };
})();


// gameBoard.addMarker('X', [0, 0]);
// gameBoard.printBoard();

displayController.renderBoard();
const player1 = playerFactory('jeff');
console.log(player1.getName());
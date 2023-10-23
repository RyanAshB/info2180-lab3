document.addEventListener('DOMContentLoaded', function() {
    const gridSquares = document.querySelectorAll('#board div')
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    gridSquares.forEach(square => {
        square.classList.add('square')
    })

    gridSquares.forEach((square, index) => {
        square.addEventListener('click', () => {

            //Checks if the current square already has a value
            if (gameBoard[index] == "") {
                const numberOfMoves = gameBoard.filter(symbol => symbol !== "").length;

                // Determine the current player (X or O) based on the number of moves
                let currentPlayer;
                if (numberOfMoves % 2 === 0) {
                  currentPlayer = 'X'; // Even number of moves, so it's player X's turn
                } else {
                  currentPlayer = 'O'; // Odd number of moves, so it's player O's turn
                }

                // Update the game state and display the X or O in the square
                gameBoard[index] = currentPlayer;
                square.classList.add(currentPlayer);
                square.textContent = currentPlayer;
            }
        })
    })


});
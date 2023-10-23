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

                // Determine which letter to place
                let currentPlayer;
                if (numberOfMoves % 2 == 0) {
                  currentPlayer = 'X';
                } else {
                  currentPlayer = 'O';
                }

                // Update the game to display an X or an O in the appropriate square when clicked
                gameBoard[index] = currentPlayer;
                square.classList.add(currentPlayer);
                square.textContent = currentPlayer;

                // Check for winner after each move
                const winner = checkIfWin(gameBoard);

                // Displays Win Message
                const statusElement = document.getElementById('status');
                if (winner) {
                    statusElement.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusElement.classList.add('you-won');
                }
            }
        })

        // Changes the colour of a square when the mouse hovers over it
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
          });

          square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
          });
    })


    function checkIfWin(isWin) {
    // Define the winning combinations
        const winGroups = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        // Checks for a winning combination
        for (let i = 0; i < winGroups.length; i++) {
            const a = winGroups[i][0];
            const b = winGroups[i][1];
            const c = winGroups[i][2];

            if (isWin[a] == isWin[b] && isWin[b] == isWin[c]) {
                return isWin[a]; 
            }
        }

    }

    //Starts new game
    const newGame = document.querySelector('.btn')
    newGame.addEventListener('click', () => {
        for (let x = 0; x < gameBoard.length; x++) {
            gameBoard[x] = "";
        }

        // Clear squares
        gridSquares.forEach(square => {
            square.textContent = "";
            square.classList.remove('X', 'O');
        });
    
        // Reset Messages
        const statusElement = document.getElementById('status');
        statusElement.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusElement.classList.remove('you-won');
    })

});
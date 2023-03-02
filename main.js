$(document).ready(function() {
    let currentPlayer = 'X';
    let gameWon = false;
    let boardState = ['', '', '', '', '', '', '', '', ''];
    const squares = $('.square');
    const message = $('#message');

    // Add click event listener to each square
    squares.click(handleSquareClick);

    // Handle square click event
    function handleSquareClick() {
        const squareIndex = squares.index($(this));

        // If the square is already taken or game is already won, do nothing
        if (boardState[squareIndex] || gameWon) {
            return;
        }

        // Update board state
        boardState[squareIndex] = currentPlayer;
        $(this).text(currentPlayer);

        // Check if game is won
        gameWon = checkForWin();

        // If game is won, display message and disable squares
        if (gameWon) {
            message.text(`${currentPlayer} has won!`);
            squares.off('click');
            return;
        }

        // If all squares are taken and no one has won, display tie message
        if (boardState.every(square => square !== '')) {
            message.text('Tie game!');
            return;
        }

        // Switch to other player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    // Check if game is won
    function checkForWin() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (let combo of winningCombos) {
            if (boardState[combo[0]] && boardState[combo[0]] === boardState[combo[1]] && boardState[combo[0]] === boardState[combo[2]]) {
                return true;
            }
        }

        return false;
    }

    // Add click event listener to reset button
    $('#reset').click(function() {
        currentPlayer = 'X';
        gameWon = false;
        boardState = ['', '', '', '', '', '', '', '', ''];
        squares.text('');
        message.text('');
        squares.click(handleSquareClick);
    });
});

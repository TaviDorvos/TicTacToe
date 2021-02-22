document.addEventListener('DOMContentLoaded', () => {

    //Restart button - reload the page
    document.getElementById("rr-btn").onclick = restartGame;

    function restartGame() {
        location.reload();
    }
    //

    //Creating the matrix[3][3] 
    var gameboard = [];
    for (var i = 0; i < 3; i++) {
        gameboard.push([]);
        gameboard[i].push(new Array(3));
        for (var j = 0; j < 3; j++) {
            gameboard[i][j] = "";
        }
    }

    var currentPlayerDisplay = document.querySelector('#current-player');
    var boxes = document.querySelectorAll('.box');

    //For every box I click I call the function
    boxes.forEach(box => {
        box.addEventListener('click', clickOnBox);
    })

    var winner = '';
    var textX = 'X';
    var textO = 'O';
    var currentPlayer = 'playerX';
    currentPlayerDisplay.innerHTML = 'Player X';

    //Checking who's turn it is and print the value(saving in the matrix too)
    //Make the div unclickable
    //Checking if the game is finished, verifying if it;s a draw or a win
    function clickOnBox(event) {
        var row = this.id.charAt(0);
        var column = this.id.charAt(1);
        if (currentPlayer === 'playerX') {
            document.getElementById(this.id).innerHTML = textX;
            currentPlayerDisplay.innerHTML = 'Player O';
            currentPlayer = 'playerO';
            document.getElementById(this.id).style.pointerEvents = "none";
            gameboard[row][column] = "X";
        } else {
            document.getElementById(this.id).innerHTML = textO;
            currentPlayerDisplay.innerHTML = 'Player X';
            currentPlayer = 'playerX';
            document.getElementById(this.id).style.pointerEvents = "none";
            gameboard[row][column] = "O";
        }

        //checking for win or draw
        if (checkForWin()) {
            if (winner == "X") {
                document.getElementById("x-win").classList.add("d-flex");
                document.getElementById("x-win").classList.remove("d-none");
                document.getElementById("gameboard").style.opacity = "0.3";
            } else if (winner == "O") {
                document.getElementById("o-win").classList.add("d-flex");
                document.getElementById("o-win").classList.remove("d-none");
                document.getElementById("gameboard").style.opacity = "0.3";
            }
        } else if (checkForDraw()) {
            document.getElementById("draw").classList.add("d-flex");
            document.getElementById("draw").classList.remove("d-none");
            document.getElementById("gameboard").style.opacity = "0.3";
        }
    }

    //this function checks rows, columns and the diagonals for the win-conditions
    function checkForWin() {
        //WINS CASES
        // [0, 1, 2]
        // [3, 4, 5]
        // [6, 7, 8]
        // [0, 3, 6]
        // [1, 4, 7]
        // [2, 5, 8]
        // [0, 4, 8]
        // [2, 4, 6]

        //checking the rows for win-condition
        for (let i = 0; i < 3; i++) {
            if (gameboard[i][0] == gameboard[i][1] && gameboard[i][1] == gameboard[i][2] && gameboard[i][1] != "") {
                winner = gameboard[i][0];
                return true;
            }
        }

        //checking the rows for win-conditon
        for (let j = 0; j < 3; j++) {
            if (gameboard[0][j] == gameboard[1][j] && gameboard[1][j] == gameboard[2][j] && gameboard[0][j] != "") {
                winner = gameboard[0][j];
                return true;
            }
        }

        //checking the diagonals for win-condition
        if (gameboard[0][0] == gameboard[1][1] && gameboard[1][1] == gameboard[2][2] && gameboard[0][0] != "") {
            winner = gameboard[0][0];
            return true;
        }

        if (gameboard[0][2] == gameboard[1][1] && gameboard[1][1] == gameboard[2][0] && gameboard[0][2] != "") {
            winner = gameboard[0][2];
            return true;
        }

        return false;
    }

    //this row checks if the all boxes are completed and initialized
    //if every box is filled returns true(it's a draw), otherwise it continues
    //until the win condition or a draw
    function checkForDraw() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gameboard[i][j] == "") {
                    return false;
                }
            }
        }
        return true;
    }
});
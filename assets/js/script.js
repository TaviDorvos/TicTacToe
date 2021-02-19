document.addEventListener('DOMContentLoaded', () => {

    //Restart button - reload the page
    document.getElementById("rr-btn").onclick = restartGame;

    function restartGame() {
        location.reload();
    }
    //

    //Creating the matrix[3][3] 
    //Create the boxes classes for the matrix in front
    var gameboardDiv = document.querySelector("#gameboard");

    var gameboard = [];
    for (var i = 0; i < 3; i++) {

        gameboard.push([]);

        gameboard[i].push(new Array(3));

        for (var j = 0; j < 3; j++) {
            var boxDiv = document.createElement("div");
            boxDiv.setAttribute("class", "box");
            boxDiv.addEventListener('click', clickOnBox);
            gameboardDiv.appendChild(boxDiv);
            gameboard[i][j] = "";
        }
    }

    var currentPlayerDisplay = document.querySelector('#current-player');

    var textX = 'X';
    var textO = 'O';

    var currentPlayer = 'playerX';
    currentPlayerDisplay.innerHTML = 'Player X';

    function clickOnBox(event) {
        if (currentPlayer === 'playerX') {
            currentPlayer = 'playerO';
            currentPlayerDisplay.innerHTML = 'Player O';
        } else {
            currentPlayer = 'playerX';
            currentPlayerDisplay.innerHTML = 'Player X';
        }
    }

    // var boxes = document.querySelectorAll('.box');
    // var currentPlayerDisplay = document.querySelector('#current-player');

    // var textX = 'X';
    // var textO = 'O';

    // //For every box I click I call the function
    // boxes.forEach(box => {
    //     box.addEventListener('click', clickOnBox);
    // })

    // var currentPlayer = 'playerX';
    // currentPlayerDisplay.innerHTML = 'Player X';

    // //Function which set the X or the O on the gameboard
    // //Sets the name of the current player
    // //Checks who is the winner
    // function clickOnBox(event) {
    //     var boxArray = Array.from(boxes);
    //     var index = boxArray.indexOf(event.target);

    //     if (currentPlayer === 'playerX') {
    //         boxArray[index].innerHTML = textX;
    //         currentPlayer = 'playerO';
    //         currentPlayerDisplay.innerHTML = 'Player O';
    //         document.getElementById(index).style.pointerEvents = "none";
    //     } else {
    //         boxArray[index].innerHTML = textO;
    //         currentPlayer = 'playerX';
    //         currentPlayerDisplay.innerHTML = 'Player X';
    //         document.getElementById(index).style.pointerEvents = "none";
    //     }

    //     //WINS CASES
    //     // [0, 1, 2]
    //     // [3, 4, 5]
    //     // [6, 7, 8]
    //     // [0, 3, 6]
    //     // [1, 4, 7]
    //     // [2, 5, 8]
    //     // [0, 4, 8]
    //     // [2, 4, 6]

    //     for (let i = 0; i < boxArray.length; i += 3) {
    //         // X WINS CASE
    //         if (boxArray[i].innerHTML === textX && boxArray[i + 1].innerHTML === textX && boxArray[i + 2].innerHTML === textX) {
    //             document.getElementById("x-win").classList.add("d-flex");
    //             document.getElementById("x-win").classList.remove("d-none");
    //             document.getElementById("gameboard").style.opacity = "0.3";
    //             //O WINS CASE
    //         } else if (boxArray[i].innerHTML === textO && boxArray[i + 1].innerHTML === textO && boxArray[i + 2].innerHTML === textO) {
    //             document.getElementById("o-win").classList.add("d-flex");
    //             document.getElementById("o-win").classList.remove("d-none");
    //             document.getElementById("gameboard").style.opacity = "0.3";
    //         }
    //     }
    //     // if (boxArray[0].innerHTML === textX && boxArray[1].innerHTML === textX && boxArray[2].innerHTML === textX ||
    //     //     boxArray[3].innerHTML === textX && boxArray[4].innerHTML === textX && boxArray[5].innerHTML === textX ||
    //     //     boxArray[6].innerHTML === textX && boxArray[7].innerHTML === textX && boxArray[8].innerHTML === textX ||
    //     //     boxArray[0].innerHTML === textX && boxArray[3].innerHTML === textX && boxArray[6].innerHTML === textX ||
    //     //     boxArray[1].innerHTML === textX && boxArray[4].innerHTML === textX && boxArray[7].innerHTML === textX ||
    //     //     boxArray[2].innerHTML === textX && boxArray[5].innerHTML === textX && boxArray[8].innerHTML === textX ||
    //     //     boxArray[0].innerHTML === textX && boxArray[4].innerHTML === textX && boxArray[8].innerHTML === textX ||
    //     //     boxArray[2].innerHTML === textX && boxArray[4].innerHTML === textX && boxArray[6].innerHTML === textX) {
    //     //     document.getElementById("x-win").classList.add("d-flex");
    //     //     document.getElementById("x-win").classList.remove("d-none");
    //     //     document.getElementById("container-id").style.opacity = "0.3";
    //     //     //O WINS CASE
    //     // } else if (boxArray[0].innerHTML === textX && boxArray[1].innerHTML === textX && boxArray[2].innerHTML === textX ||
    //     //     boxArray[3].innerHTML === textO && boxArray[4].innerHTML === textO && boxArray[5].innerHTML === textO ||
    //     //     boxArray[6].innerHTML === textO && boxArray[7].innerHTML === textO && boxArray[8].innerHTML === textO ||
    //     //     boxArray[0].innerHTML === textO && boxArray[3].innerHTML === textO && boxArray[6].innerHTML === textO ||
    //     //     boxArray[1].innerHTML === textO && boxArray[4].innerHTML === textO && boxArray[7].innerHTML === textO ||
    //     //     boxArray[2].innerHTML === textO && boxArray[5].innerHTML === textO && boxArray[8].innerHTML === textO ||
    //     //     boxArray[0].innerHTML === textO && boxArray[4].innerHTML === textO && boxArray[8].innerHTML === textO ||
    //     //     boxArray[2].innerHTML === textO && boxArray[4].innerHTML === textO && boxArray[6].innerHTML === textO) {
    //     //     document.getElementById("o-win").classList.add("d-flex");
    //     //     document.getElementById("o-win").classList.remove("d-none");
    //     //     document.getElementById("container-id").style.opacity = "0.3";
    //     // }
    // }
});
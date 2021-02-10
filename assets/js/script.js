document.addEventListener('DOMContentLoaded', () => {
    var boxes = document.querySelectorAll('.box');
    var currentPlayerDisplay = document.querySelector('#current-player');

    var textX = 'X';
    var textO = 'O';

    //For every box I click I call the function
    boxes.forEach(box => {
        box.addEventListener('click', clickOnBox);
    })

    var currentPlayer = 'playerX';
    currentPlayerDisplay.innerHTML = 'Player X';

    //Function which set the X or the O on the gameboard
    //Sets the name of the current player
    //Checks who is the winner
    function clickOnBox(event) {
        var boxArray = Array.from(boxes);
        var index = boxArray.indexOf(event.target);

        if (currentPlayer === 'playerX') {
            boxArray[index].innerHTML = textX;
            currentPlayer = 'playerO';
            currentPlayerDisplay.innerHTML = 'Player O';
        } else {
            boxArray[index].innerHTML = textO;
            currentPlayer = 'playerX';
            currentPlayerDisplay.innerHTML = 'Player X';
        }
        // X WINS CASE
        if (boxArray[0].innerHTML === textX && boxArray[1].innerHTML === textX && boxArray[2].innerHTML === textX ||
            boxArray[3].innerHTML === textX && boxArray[4].innerHTML === textX && boxArray[5].innerHTML === textX ||
            boxArray[6].innerHTML === textX && boxArray[7].innerHTML === textX && boxArray[8].innerHTML === textX ||
            boxArray[0].innerHTML === textX && boxArray[3].innerHTML === textX && boxArray[6].innerHTML === textX ||
            boxArray[1].innerHTML === textX && boxArray[4].innerHTML === textX && boxArray[7].innerHTML === textX ||
            boxArray[2].innerHTML === textX && boxArray[5].innerHTML === textX && boxArray[8].innerHTML === textX ||
            boxArray[0].innerHTML === textX && boxArray[4].innerHTML === textX && boxArray[8].innerHTML === textX ||
            boxArray[2].innerHTML === textX && boxArray[4].innerHTML === textX && boxArray[6].innerHTML === textX) {
            document.getElementById("x-win").classList.add("d-flex");
            document.getElementById("x-win").classList.remove("d-none");
            document.getElementById("container-id").style.opacity = "0.3";
            //O WINS CASE
        } else if (boxArray[0].innerHTML === textX && boxArray[1].innerHTML === textX && boxArray[2].innerHTML === textX ||
            boxArray[3].innerHTML === textO && boxArray[4].innerHTML === textO && boxArray[5].innerHTML === textO ||
            boxArray[6].innerHTML === textO && boxArray[7].innerHTML === textO && boxArray[8].innerHTML === textO ||
            boxArray[0].innerHTML === textO && boxArray[3].innerHTML === textO && boxArray[6].innerHTML === textO ||
            boxArray[1].innerHTML === textO && boxArray[4].innerHTML === textO && boxArray[7].innerHTML === textO ||
            boxArray[2].innerHTML === textO && boxArray[5].innerHTML === textO && boxArray[8].innerHTML === textO ||
            boxArray[0].innerHTML === textO && boxArray[4].innerHTML === textO && boxArray[8].innerHTML === textO ||
            boxArray[2].innerHTML === textO && boxArray[4].innerHTML === textO && boxArray[6].innerHTML === textO) {
            document.getElementById("o-win").classList.add("d-flex");
            document.getElementById("o-win").classList.remove("d-none");
            document.getElementById("container-id").style.opacity = "0.3";
        }
    }
});
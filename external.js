const Gameboard = (function() {
    const boardMaterial = [];
    return {
        boardMaterial,
    }
})();

const Game = (function() {
    /*const populateBoard = () => {
        for (let i = 0; i <= Gameboard.boardMaterial.length - 1; i++) {
            let boardSection = document.querySelector(`.grid-item${i}`);
            boardSection.textContent = Gameboard.boardMaterial[i];
        }
    }*/
    let player1Turn = true;
    let player2Turn = false;
    const populateBoard = (event) => {
        if (player1Turn === true) {
            if (event.target.textContent === "") {
                event.target.textContent = "X";
                player1Turn = false;
                player2Turn = true;
            }
        }
        if (player2Turn === true) {
            if (event.target.textContent === "") {
                event.target.textContent = "O";
                player2Turn = false;
                player1Turn = true;
                Gameboard.boardMaterial.push("O");
            }
        }
    }
    return {
        populateBoard,
    }
})();


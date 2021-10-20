const levelSelection = document.getElementById("level-selection");
const playGame = document.getElementById("play-game");
const boardContainer = document.getElementById("board-container");

//1. recuperare il livello scelto dall'utente al click del play
//2. creazione di una funzione che indica il numero di celle in base ad un livello
//3. abbinare il numero di celle al livello scelto dell'utente

//1.
playGame.addEventListener("click", function () {
    let level = parseInt(levelSelection.value);
    //il valore del livello è un numero da 1 a 3 

    //3.
    let totalBoxes = levelToBox(level);

    boxCreation(totalBoxes);

})

//2.
function levelToBox(level) {
    let numberOfBoxes

    if (level === 1) {
        numberOfBoxes = 100;
    } else if (level === 2) {
        numberOfBoxes = 81;
    } else if (level === 3) {
        numberOfBoxes = 49;
    }

    return numberOfBoxes;

}


//4. creazione di una funzione che aggiunge in html il n di celle in base al valore di total-boxes 
//5. trovare la width e height adatta in base al numero di celle per ogni riga/colonna e inserire il numero della cella
//6. al click su ogni cella aggiungere classe active

//4.
function boxCreation(totalBoxes) {
    boardContainer.innerHTML = "";


    let numberOfCols = Math.sqrt(totalBoxes, 2);

    for (let index = 0; index < totalBoxes; index++) {

        let newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.classList.add("box-level-" + numberOfCols);
        newBox.innerText = index + 1;
        //6
        newBox.addEventListener("click", function () {
            this.classList.toggle("active");

        })
        boardContainer.append(newBox);
    }

}

//7. creazione di una funzione che genera numeri random da 1 al numero massimo di celle in base al livello scelto dall'utente (total boxes)
//8. creazione di un array che dovrà contenere i 16 numeri random (totale bombe)
//9. ciclare la funzione randomNumberGenerator fino a che il totale degli elementi dell'array non sia uguale al totale bombe
//  9.A se un numero random creato è uguale ad un mumero già presente nell'array non viene pushato.


//7
function randomNumberGenerator(numMin, numMax) {
    let numRandom = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    return numRandom;
}


function bombsGenerator() {
    //8
    let bombNumbersSet = [];
    let bombsTotal = 16;

    //9
    while (bombNumbersSet.length < bombsTotal) {
        let newBomb = randomNumberGenerator(1, totalBoxes);
    }
    //9.A
    let alreadyIn = bombNumbersSet.includes(newBomb);

    if (alreadyIn === false) {
        bombNumbersSet.push(newBomb);
    }
}


let player = {

    name: "Alex",
    chips: 200
}

let cards = []; // array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el"); //Its the same as  getElementById but it returns a node list of

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
   
     let randomNumber =  Math.floor(Math.random()* 13 ) + 1;
     if (randomNumber > 10){
        return 10;
     }
     else if (randomNumber === 1){
        return 11;
     }
     else{
        return randomNumber;
     }
}



function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " ;
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    // render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {;
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}
}



// let randomNumber = Math.floor(Math.random() * 6 ) + 1

// console.log(randomNumber)

// function rollDice(){

//     let randomNumber = Math.floor(Math.random() * 6 ) + 1
//     return randomNumber;
// }

// console.log(rollDice())
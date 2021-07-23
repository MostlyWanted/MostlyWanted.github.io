//Name EXTRACTOR
// console.log("you clicked the button");
// LIST OF ELEMENTS EXTRACTED
let call = document.getElementById("call");
let fold = document.getElementById("fold");
let raise = document.getElementById("raise");
let allIn = document.getElementById("allIn");
let raiseValue = document.getElementById("raiseValue");
// button/input elements
let submitName = document.getElementById("playerNameButton");
let playerName = document.getElementById("playerName");
let resetGameButton = document.getElementById("startGame");
let sGameButton = document.getElementById("sGame");
//players
let dealer = document.getElementById("dealer");
let playerTwo = document.getElementById("adversary");

// START GAME INITIALIZER

submitName.addEventListener("click", function(evt) {
    playerOneName = playerName.value;
    playerName.disabled=true;
});
//CLASSES

playerOne = {
    pocketHand: [],
    chips: 50,
};
playerTwo = {
    pocketHand: [],
    chips: 50,
    }
let table = {
    board: [],
    pot: "",
    }; 
    
    
    // function deck() {
// shuffle/add cards to the deck
//     function deckCreator() {
//     this.start();
//     // this.totalCardDeck;
//     this.deckShuffler();
// };

//CREATES A NEW CLASS IN THE DIV TO DISPLAY CARDS

function classNameCreatorP1() {
    document.getElementById("pCardOne").className = "card ".concat(playerOne.pocketHand[0]);
}
function classNameCreatorP2() {
    document.getElementById("pCardTwo").className = "card " + playerOne.pocketHand[1];
} 
function classNameCreatorTable1() {
    document.getElementById("fOne").className = "card " + table.board[0];
}
function classNameCreatorTable2() {
        document.getElementById("fTwo").className = "card " + table.board[1];
    }
function classNameCreatorTable3() {
        document.getElementById("fThree").className = "card " + table.board[2];
}
function classNameCreatorTable4() {
        document.getElementById("theTurn").className = "card " + table.board[3];
    }
function classNameCreatorTable5() {
    document.getElementById("theRiver").className = "card " + table.board[4];
}
//PLAYER 2 CARDS THAT WILL BE REVEALD AT THE END OF THE GAME
function classNameCreatorPtwo1() {
    document.getElementById("c1").className = "card " + playerTwo.pocketHand[0];
} 
function classNameCreatorPtwo2() {
    document.getElementById("c2").className = "card " + playerTwo.pocketHand[1];
} 


// PLAYER ONE CHIPS FUNCTION: DISPLAYS PLAYER ONE CHIP AMMOUNT
function playerOneChips() {
    document.getElementById("player").innerText = "PLAYER ONE " + playerOne.chips;
}
function playerTwoChips() {
    document.getElementById("adversary").innerText = "ADVERSARY " + playerTwo.chips;
}
// DISPLAYS POT AMMOUNT
function moneyInPot() {
    document.getElementById("pot").innerText = "POT " + table.pot;
}


let totalCardDeck;
// creates a deck of cards
function defaultDeck() {
    cardNum = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K'];
    cardSuit = ['s','c','h','d'];
    // CREATING NEW ARRAYS BY MERGING NUMS AND SUITS
    let cardDeckS = cardNum.map(x => cardSuit["0"] + x) 
    let cardDeckC = cardNum.map(x => cardSuit["1"] + x) 
    let cardDeckH = cardNum.map(x => cardSuit["2"] + x) 
    let cardDeckD = cardNum.map(x => cardSuit["3"] + x) 
    // OUR completed CARD DECK
    
    totalCardDeck = [...cardDeckS, ...cardDeckC, ...cardDeckH, ...cardDeckD];
    // totalCardDeck.forEach(x =>  ) ;
    console.log(totalCardDeck);
    return(totalCardDeck); 
}
defaultDeck();
// shuffles the deck MIGHT NOT NEED ONE BECAUSE OF CARD HANDLER BELOW

// };

// }

/* STATE OF THE GAME */
// RANDOM CARD SELECTOR
// function cardHandler() {
    function cardAssignerP1(){
        randomAssignedCard1 = totalCardDeck.splice(Math.floor(Math.random()*totalCardDeck.length),1);
        randomAssignedCard2 = totalCardDeck.splice(Math.floor(Math.random()*totalCardDeck.length),1);
        return (playerOne.pocketHand.push(randomAssignedCard1,randomAssignedCard2))
    };
    function cardAssignerP2(){
        randomAssignedCard1 = totalCardDeck.splice(Math.floor(Math.random()*totalCardDeck.length),1);
        randomAssignedCard2 = totalCardDeck.splice(Math.floor(Math.random()*totalCardDeck.length),1);
        return (playerTwo.pocketHand.push(randomAssignedCard1,randomAssignedCard2))
        
};
function flopHandler() {
    randomFlopCard1 = totalCardDeck.splice(Math.floor(Math.random()*totalCardDeck.length),1)
    randomFlopCard2 = totalCardDeck.splice(Math.floor(Math.random()*totalCardDeck.length),1)
    randomFlopCard3 = totalCardDeck.splice(Math.floor(Math.random()*totalCardDeck.length),1)
    return(table.board.push(randomFlopCard1,randomFlopCard2,randomFlopCard3))
    
};

function revealTheTurn() {
    randomTheTurn = totalCardDeck.splice(Math.floor(Math.random()*52),1)
    return(table.board.push(randomTheTurn))
    
}
function revealTheRiver() {
    randomTheRiver = totalCardDeck.splice(Math.floor(Math.random()*52),1)
    return(table.board.push(randomTheRiver))
    
};
// FUNCTION THAT EXTRACTS MONEY FROM PLAYER 1 AND 2 AND PUSHES IT IN THE POT
function getPotMoney() {
    console.log(playerOne.chips);
    console.log(playerTwo.chips);
    table.pot = 100 - (playerOne.chips + playerTwo.chips);
console.log(table.pot)
}

//GAME BUTTON FUNCTIONS
function callFunction() {playerOne.chips = playerTwo.chips};
function raiseFunction() {
    playerOne.chips = playerOne.chips - raiseValue.value;
    // playerTwo.chips = playerTwo.chips - raiseValue.value;
    playerTwo.chips = playerOne.chips;
    alert('player two has called your raise!')
};
// fold = game over 
function foldFunction() {};
function allInFunction() {
    playerOne.chips = playerOne.chips - playerOne.chips;
    playerTwo.chips = playerTwo.chips - playerTwo.chips;
    alert('player two has called your raise!')
 
};

// PLAYERTWO FUNCTIONS
function callP2() {playerTwo.chips = playerOne.chips}
// function raiseP2() {playerTwo.chips = playerOne.chips}
function allInP2(){playerTwo.chips = playerTwo.chips - playerTwo.chips}
function foldP2() {  
    defaultDeck();
    playerOne.pocketHand = [];
    playerTwo.pocketHand = [];
    playerOne.chips = 50;
    playerTwo.chips = 50;
    table.pot = 0;
    playerOneChips();
    playerTwoChips();
    getPotMoney();
    moneyInPot();
    //RESETS THE CARDS STATE TO FACE DOWN
    document.getElementById("pCardOne").className = "card back-red"
    document.getElementById("pCardTwo").className = "card back-red"
    document.getElementById("fOne").className = "card back"
    document.getElementById("fTwo").className = "card back"    
    document.getElementById("fThree").className = "card back" 
    document.getElementById("theTurn").className = "card back"
    document.getElementById("theRiver").className = "card back"
    alert('P2 FOLDED! WINNER WINNER CHICKEN DINNER!!!')
    alert('The Game will be restarted!')}


// GAME BOT/PLAYER 2 FUNCTION

function playerTwoMoves() {
if(playerTwo.pocketHand == badCards) {
    playerTwoFold()
} else if (playerTwo.pocketHand == decentCards) {
    playerTwoCall()
} else if (playerTwo.pocketHand == excellentCards) {
    playerTwoAllIn()
}
}


//button eventlisteners/functions
call.addEventListener('click', callFunction());

raise.addEventListener('click', raiseFunction());

fold.addEventListener('click', foldFunction());

allIn.addEventListener('click', allInFunction());


//starts game gives p1 two cards
sGameButton.addEventListener('click',function (){
defaultDeck();
cardAssignerP1();
cardAssignerP2();
classNameCreatorP1();
classNameCreatorP2();
playerOne.chips = playerOne.chips - 1;
playerTwo.chips = playerTwo.chips - 2;
playerOneChips();
playerTwoChips();
getPotMoney();
moneyInPot();
alert("You are the small Blind!")
});

//RESETS THE GAME STATE BACK TO DEFAULT
resetGameButton.addEventListener('click',function() { 
    defaultDeck();
    cardAssignerP1();
    cardAssignerP2();
    classNameCreatorP1();
    classNameCreatorP2();
    playerOne.pocketHand = [];
    playerTwo.pocketHand = [];
    playerOne.chips = 50;
    playerTwo.chips = 50;
    table.pot = 0;
    playerOneChips();
    playerTwoChips();
    getPotMoney();
    moneyInPot();
    //RESETS THE CARDS STATE TO FACE DOWN
    document.getElementById("pCardOne").className = "card back-red"
    document.getElementById("pCardTwo").className = "card back-red"
    document.getElementById("fOne").className = "card back"
    document.getElementById("fTwo").className = "card back"    
    document.getElementById("fThree").className = "card back" 
    document.getElementById("theTurn").className = "card back"
    document.getElementById("theRiver").className = "card back"
    document.getElementById("c1").className = "card back"
    document.getElementById("c2").className = "card back"
    alert('The Game has been restarted!')
    console.log("The Game has been restarted!")
    
});

// HAND RANKINGS

// let handPOne = playerOne.pocketHand +  
// let handPtwo = playerTwo.pocketHand + 

// function pokerHandRank() {
   
// }


// console.log(totalCardDeck);
// let allCards = ["s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "sJ", "sQ", "sK", "sA", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "cJ", "cQ", "cK", "cA", "h02", "h03", "h04", "h05", "h06", "h07", "h08", "h09", "h10", "hJ", "hQ", "hK", "hA", "d02", "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10", "dJ", "dQ", "dK", "dA"]

// let order = A > K > Q > J > 10 > 09 > 08 > 07 > 06 > 05 > 04 > 03 > 02;
// if (playerOne.pocketHand.includes(order) > playerTwo.pocketHand.includes(order)) {
//     alert("playerOne Wins")
// }


//BIG BLIND AND SMALL BLIND BET
// startGame = function(evt) {
    
    // };
    
//ASSIGNING BUTTONS:
// call.addEventListener('click', function() {
// })


// GIVE PLAYER THE CHOICE TO CALL, RAISE OR FOLD (MAKE COMPUTER COPY)
// sGame.onclick = function () {
// cardAssignerP1()
// cardAssignerP2()
// classNameCreatorP1()
// classNameCreatorP2()
// }

// console.log(newPlayerchips);
// console.log(newPlayerTwochips);

// getPlayerChoice = function(choice){ 
    // if (choice = call.addEventListener('click'function() {let playerName.chips = playerTwo.chips} ))
    // }
    function lastRound() {
        if(playerOne.chips > playerTwo.chips) {
            classNameCreatorPtwo1() 
            classNameCreatorPtwo2() 
            alert("winner winner chicken dinner!")
        }else if(playerOne.chips === playerTwo.chips) {
            alert("its a tie!")
            classNameCreatorPtwo1() 
            classNameCreatorPtwo2() 
        }else {alert("booohooo you lost!")
        classNameCreatorPtwo1() 
        classNameCreatorPtwo2() 
        }
    }
    

    
    function lastBettingRound() {
        console.log("lastbettinground function")
        call.onclick = function () {
            console.log("last betting round on click")
        callFunction(),
            playerOneChips(),
            playerTwoChips(), 
            flopHandler(),
            classNameCreatorTable1(),
            classNameCreatorTable2(),
            classNameCreatorTable3(),
            getPotMoney(),
            moneyInPot(),
            alert("this is the last round!")
        }

        raise.onclick = function () {
            console.log("last betting roundraise onclick")
            raiseFunction(), 
            playerOneChips(),
            playerTwoChips(),
            flopHandler(),
            classNameCreatorTable1(),
            classNameCreatorTable2(),
            classNameCreatorTable3(),
            getPotMoney(),
            moneyInPot(),
            alert("this is the last round!"),
            lastRound();
        }
        allIn.onclick = function () {
            console.log("last betting round all in onclick")
            allInFunction(),
            playerOneChips(),
            playerTwoChips(), 
            flopHandler(),
        classNameCreatorTable1(),
        classNameCreatorTable2(),
        classNameCreatorTable3(),
        getPotMoney(),
        moneyInPot(),
        classNameCreatorPtwo1(),
        classNameCreatorPtwo2(),
        alert("this is the last round!")
        lastRound();

    }}
    
    // MONEY IN POT FUNCTION: DISPLAYS MONEY IN POT
    
    function theRiverturner() {
        console.log(" the river turner func")
    call.onclick = function () {
        console.log(" the river turner call")
            callFunction(),
                playerOneChips(),
                playerTwoChips(), 
                flopHandler(),
                classNameCreatorTable1(),
                classNameCreatorTable2(),
                classNameCreatorTable3(),
                getPotMoney(),
                moneyInPot(),
                alert("next round: The River!"),
                classNameCreatorTable5(),
                revealTheRiver(),
                lastBettingRound()
        
    };
    raise.onclick = function () {
        console.log(" the river turner raise")
            raiseFunction(), 
            playerOneChips(),
            playerTwoChips(),
            flopHandler(),
            classNameCreatorTable1(),
            classNameCreatorTable2(),
            classNameCreatorTable3(),
            getPotMoney(),
            moneyInPot(),
            alert("next round: The River!"),
            revealTheRiver(),
            classNameCreatorTable5(),
            lastBettingRound()
        
        };
       allIn.onclick = function () {
        console.log(" the river turner all in")
            allInFunction(),
            playerOneChips(),
            playerTwoChips(), 
            flopHandler(),
        classNameCreatorTable1(),
        classNameCreatorTable2(),
        classNameCreatorTable3(),
        getPotMoney(),
        moneyInPot(),
        classNameCreatorPtwo1(),
        classNameCreatorPtwo2(),
        alert("next Round: The River!"),
        revealTheRiver(),
        classNameCreatorTable5(),
        lastBettingRound()
        }
        }
    
    //COLLECT MONEY IN POT (COMPUTER MATCHES THE BET)
    
    // IF CHOICE IS MADE DEAL FLOP
call.onclick = function() { 
    console.log(" golbal call function") 
        callFunction(),
        playerOneChips(),
        playerTwoChips(), 
        flopHandler(),
        classNameCreatorTable1(),
        classNameCreatorTable2(),
        classNameCreatorTable3(),
        getPotMoney(),
        moneyInPot() 

};
raise.onclick = function() { 
    console.log(" golbal raise function")  
    raiseFunction(), 
    playerOneChips(),
    playerTwoChips(),
    flopHandler(),
    classNameCreatorTable1(),
    classNameCreatorTable2(),
    classNameCreatorTable3(),
    getPotMoney(),
    moneyInPot(),
    revealTheTurn(),
    classNameCreatorTable4(), 
    alert('next round: the turn'),
    theRiverturner()
    
};
allIn.onclick = function() {  
    console.log(" golbal allin function") 
    allInFunction(),
    playerOneChips(),
    playerTwoChips(), 
    flopHandler(),
classNameCreatorTable1(),
classNameCreatorTable2(),
classNameCreatorTable3(),
getPotMoney(),
moneyInPot(),
classNameCreatorPtwo1(),
classNameCreatorPtwo2(),
revealTheTurn(),
classNameCreatorTable4(),  
alert('next round: the turn'),
theRiverturner()
// foldP2()


};
fold.onclick = function() { 
    console.log(" golbal fold function") 
    defaultDeck();
    playerOne.pocketHand = [];
    playerTwo.pocketHand = [];
    playerOne.chips = 50;
    playerTwo.chips = 50;
    table.pot = 0;
    playerOneChips();
    playerTwoChips();
    getPotMoney();
    moneyInPot();
    //RESETS THE CARDS STATE TO FACE DOWN
    document.getElementById("pCardOne").className = "card back-red"
    document.getElementById("pCardTwo").className = "card back-red"
    document.getElementById("fOne").className = "card back"
    document.getElementById("fTwo").className = "card back"    
    document.getElementById("fThree").className = "card back" 
    document.getElementById("theTurn").className = "card back"
    document.getElementById("theRiver").className = "card back"
    alert('YOU HAVE FOLDED! GAME OVER!!!')
    alert('The Game will be restarted!')
}
// PROMPT PLAYER CALL/BET/ALLIN/FOLD


// COLLECT NEW BETS IN POT
// getPotMoney()

// REVEAL POST FLOP (THE TURN) CARD
// revealTheTurn()


// NEW BETTING ROUND BEGINS FROM LEFT (CALL BET RAISE FOLD ALL IN)


// COLLECT BETS IN POT
// getPotMoney()

// REVEAL (THE RIVER)
// revealTheRiver() 

// PROMPT UNTIL THERE IS NO MORE MONEY TO BET
// if (playerOne.chips === 0 || player.Two.chips === 0) {

// }

// COLLECT BETS IN POT
// getPotMoney()

// REVEAL CARDS
// classNameCreatorPtwo1(),
// classNameCreatorPtwo2() 

// RUN COMBINATIONS OF 5 CARDS IN 7 CARD SET




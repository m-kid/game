var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted';
var player = {
        name: '',
        score: 0
    };

var computer = {
        score: 0
    };


var newGameBtn = document.getElementById('js-newGameButton');
var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');
var winnerInfo = document.getElementById('js-winnerInfo')

function newGame() {
  player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    playerPointsElem.innerHTML = '0';
    computerPointsElem.innerHTML = '0';
    gameState = 'started';
    setGameElements();
    playerNameElem.innerHTML = player.name;
  }

}

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        winnerInfo.innerHTML = 'The game has begun'
      break;
    case 'ended':
        newGameElem.style.display = 'block';
        newGameBtn.innerText = 'Jeszcze raz';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        break;
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
  }
}


function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}


function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    console.log(playerPick);
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock') ) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
        playerPointsElem.innerHTML = player.score;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
        computerPointsElem.innerHTML = computer.score;
    }
    else {
        computerResultElem.innerHTML = "Remis!";
        playerResultElem.innerHTML = "Remis!";
    }


if (computer.score === 10 || player.score === 10) {
   gameState = 'ended';
    console.log(gameState);
        if (computer.score == 10) {
        winnerInfo.innerHTML = 'Computer wins';
        }
        else if (player.score == 10){
        winnerInfo.innerHTML = player.name + ' wins';
        }

} else {
    gameState = 'started';
     console.log(gameState);
}

setGameElements();
}



function checkGameWinner (computerScore, playerScore) {

if (computerScore > 9 || playerScore > 9) {
   gameState = 'ended';
    console.log(gameState);
} else {
    gameState = 'started';
     console.log(gameState);
}

}



console.log(gameState)
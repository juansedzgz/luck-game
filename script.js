'use strict';

let player1 = document.querySelector(`.player--0`);
let player2 = document.querySelector(`.player--1`);
let player1Score = document.querySelector(`#score--0`);
let player1Current = document.querySelector(`#current--0`);
let player2Score = document.querySelector(`#score--1`);
let player2Current = document.querySelector(`#current--1`);

let btnNew = document.querySelector(`.btn--new`);
let btnRoll = document.querySelector(`.btn--roll`);
let btnHold = document.querySelector(`.btn--hold`);

let diceImage = document.querySelector(`.dice`);
// document.querySelector(`.player--0`).style.backgroundColor = `#333`;
// console.log(document.querySelector(`.player--1`).classList.contains(`player--active`));

// document.querySelector(`.player--0`).classList.remove(`player--active`);
// document.querySelector(`.player--1`).classList.add(`player--active`);

player1Score.textContent = 0;
player2Score.textContent = 0;
diceImage.style.opacity = 0;
let turn = 0;

// console.log(diceNumber);
// player1Score.textContent = 99

const holdScore = function () {
  if (player1Score.textContent > 100 || player2Score.textContent > 100) {
    return;
  }
  if (turn === 0) {
    player1Score.textContent = Number(player1Score.textContent) + Number(player1Current.textContent);
    player1Current.textContent = 0;
    turn = 1;
    if (player1Score.textContent >= 100) player1.classList.add(`player--winner`);
    else {
      document.querySelector(`.player--0`).classList.remove(`player--active`);
      document.querySelector(`.player--1`).classList.add(`player--active`);
    }
  } else {
    player2Score.textContent = Number(player2Score.textContent) + Number(player2Current.textContent);
    player2Current.textContent = 0;
    turn = 0;
    if (player2Score.textContent >= 100) player2.classList.add(`player--winner`);
    else {
      document.querySelector(`.player--1`).classList.remove(`player--active`);
      document.querySelector(`.player--0`).classList.add(`player--active`);
    }
  }
};

const rollDice = function () {
  if (player1Score.textContent > 100 || player2Score.textContent > 100) {
    return;
  }
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceImage.style.opacity = 1;
  switch (diceNumber) {
    case 1:
      diceImage.src = `dice-1.png`;
      break;
    case 2:
      diceImage.src = `dice-2.png`;
      break;
    case 3:
      diceImage.src = `dice-3.png`;
      break;
    case 4:
      diceImage.src = `dice-4.png`;
      break;
    case 5:
      diceImage.src = `dice-5.png`;
      break;
    case 6:
      diceImage.src = `dice-6.png`;
      break;
    default:
      diceImage.src = `dice-5.png`;
  };
  console.log(turn);
  console.log(diceNumber);
  if (turn === 0) {
    if (diceNumber !== 1) {
      player1Current.textContent = Number(player1Current.textContent) + diceNumber;
    } else {
      player1Current.textContent = 0;
      turn = 1;

      document.querySelector(`.player--0`).classList.remove(`player--active`);
      document.querySelector(`.player--1`).classList.add(`player--active`);
    }
  } else {
    document.querySelector(`.current`).style.backgroundColor = ``;
    if (diceNumber !== 1) {
      player2Current.textContent = Number(player2Current.textContent) + diceNumber;
    } else {
      player2Current.textContent = 0;
      turn = 0;

      document.querySelector(`.player--1`).classList.remove(`player--active`);
      document.querySelector(`.player--0`).classList.add(`player--active`);
    }
  }
};

const newGame = function () {
  player1Current.textContent = 0;
  player1Score.textContent = 0;
  player2Current.textContent = 0;
  player2Score.textContent = 0;
  diceImage.style.opacity = 0;


  if (player1.classList.contains(`player--winner`)) {
    player1.classList.remove(`player--winner`);
  } else {
    document.querySelector(`.player--1`).classList.remove(`player--active`);
    document.querySelector(`.player--0`).classList.add(`player--active`);
    player2.classList.remove(`player--winner`);
  };

};


btnRoll.addEventListener(`click`, rollDice);
btnHold.addEventListener(`click`, holdScore);
btnNew.addEventListener(`click`, newGame);





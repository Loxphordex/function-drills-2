'use strict';

function jediName(firstName, lastName) {
  let jediFirst = firstName.split('').slice(0, 2);
  let jediLast = lastName.split('').slice(0, 3);
  return jediLast.join('') + jediFirst.join('');
}

function beyond(num) {
  if (num >= Infinity || num <= Number.NEGATIVE_INFINITY) {return 'And beyond';}
  if (num > 0 && num < Infinity) {return 'To infinity';}
  if (num < 0 && num > Number.NEGATIVE_INFINITY) {return 'To negative infinity';}
  else {console.log('Staying home');}
}

function decode(code) {
  let arr = code.split(' ');
  let message = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'a') {message += arr[i][1];}
    else if (arr[i][0] === 'b') {message += arr[i][2];}
    else if (arr[i][0] === 'c') {message += arr[i][3];}
    else if (arr[i][0] === 'd') {message += arr[i][4];}
    else {message =+ ' ';}
  }
  return message;
}

function dayCounter(month, leapYear = false) {
  let answer;
  switch(month){
  case(/january/gi):
  case(/march/gi):
  case(/may/gi):
  case(/july/gi):
  case(/august/gi):
  case(/october/gi):
  case(/december/gi):
    answer = `${month} has 31 days`;
    break;
  case(/april/gi):
  case(/june/gi):
  case(/september/gi):
  case(/november/gi):
    answer = `${month} has 30 days`;
    break;
  case(/february/gi && leapYear === false):
    answer = `${month} has 28 days`;
    break;
  case(/february/gi && leapYear === true):
    answer = `${month} has 29 days`;
    break;
  }
}

function RPS(bet){
  // 1 = rock
  // 2 = paper
  // 3 = scissors
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if (bet < 1 || bet > 3) {
    throw new Error('bet must be 1, 2, or 3');
  }
  if (bet === randomNo) {return 'Tie!';}
  // bet = rock
  if (bet === 1) {
    if (randomNo === 2) {return 'Computer plays paper! You lose!';}
    if (randomNo === 3) {return 'Computer plays scissors! You win!';}
  }
  // bet = paper
  if (bet === 2) {
    if (randomNo === 1) {return 'Computer plays rock! You win!';}
    if (randomNo === 3) {return 'Computer plays scissors! You lose!';}
  }
  // bet = scissors
  if (bet === 3) {
    if (randomNo === 1) {return 'Computer plays rock! You lose!';}
    if (randomNo === 2) {return 'Computer plays paper! You win!';}
  }
}


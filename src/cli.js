import readlineSync from 'readline-sync';

function greet() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

function getRandomInt(from, to) {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { greet, getRandomInt };

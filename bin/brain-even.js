#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

const playerName = greet();
const rounds = 3;
const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
let failure = false;

console.log(rule);

function isEven(number) {
  return number % 2 === 0;
}

function generateQuestion() {
  const number = Math.floor(Math.random() * (100 - 0));
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [number, rightAnswer];
}

// game loop
for (let i = 0; i < rounds; i += 1) {
  const [generatedNumber, rightAnswer] = generateQuestion();
  console.log(`Question: ${generatedNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${playerName}!`);
    failure = true;
    break;
  }
  console.log('Correct!');
}
if (!failure) {
  console.log(`Congratulations, ${playerName}!`);
}
